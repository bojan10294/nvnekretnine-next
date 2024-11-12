import Button from 'components/FormElements/Button';
import Form from 'components/FormElements/Form';
import ControlledInput from 'components/FormElements/Input/ControlledInput';
import ControlledTextArea from 'components/FormElements/TextArea/ControlledTextArea';
import Snackbar from 'components/Snakbar';
import { fetchService } from 'lib/fetchService';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<FormValues>({
    defaultValues: { email: '', message: '', name: '', phone: '', website: '' }
  });

  const submit = async (values: FormValues) => {
    setIsSubmitted(false);
    const response = await fetchService('api/contact', {
      body: JSON.stringify(values),
      method: 'POST'
    });
    reset();
    if (response?.status === 200) {
      setIsSubmitted(true);
    } else {
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
