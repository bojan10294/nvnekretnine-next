import Button from 'components/FormElements/Button';
import Form from 'components/FormElements/Form';
import ControlledInput from 'components/FormElements/Input/ControlledInput';
import ControlledTextArea from 'components/FormElements/TextArea/ControlledTextArea';
import Snackbar from 'components/Snakbar';
import { fetchService } from 'lib/fetchService';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
}

// Add type declaration for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<FormValues>({
    defaultValues: { email: '', message: '', name: '', phone: '', website: '' }
  });

  // Check if reCAPTCHA is loaded
  useEffect(() => {
    if (typeof window !== 'undefined' && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsRecaptchaLoaded(true);
      });
    }
  }, []);

  const submit = async (values: FormValues) => {
    try {
      setIsSubmitted(false);

      // Only proceed if reCAPTCHA is loaded
      if (!isRecaptchaLoaded) {
        throw new Error('reCAPTCHA not loaded');
      }

      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'contact_form_submit' }
      );

      // Add token to the form data
      const formData = {
        ...values,
        recaptchaToken: token
      };

      const response = await fetchService('api/contact', {
        body: JSON.stringify(formData),
        method: 'POST'
      });

      reset();

      if (response?.status === 200) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
        throw { message: 'error' };
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(true);
      throw { message: 'error' };
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <ControlledInput
          control={control}
          label="Ime"
          name="name"
          rules={{ required: 'Molimo unestite ime' }}
        />
        <ControlledInput
          control={control}
          label="E-mail"
          name="email"
          rules={{
            pattern: {
              message: 'Molimo unestite validan e-mail',
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            required: 'Molimo unestite e-mail'
          }}
        />
        <ControlledInput control={control} label="Telefon" name="phone" />
        <ControlledTextArea
          control={control}
          label="Poruka"
          name="message"
          rules={{ required: 'Molimo unesite poruku' }}
        />
        <Button className="!py-3 !px-16 rounded-md" isSubmitting={isSubmitting}>
          Pošaljite
        </Button>
      </Form>
      {isSubmitted && <Snackbar isSubmitSuccessful={isSubmitSuccessful} />}
    </>
  );
};

export default ContactForm;
