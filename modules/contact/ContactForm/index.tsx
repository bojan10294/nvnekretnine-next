import Button from 'components/FormElements/Button';
import Form from 'components/FormElements/Form';
import ControlledInput from 'components/FormElements/Input/ControlledInput';
import ControlledTextArea from 'components/FormElements/TextArea/ControlledTextArea';
import { fetchService } from 'lib/fetchService';
import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  phone?: number;
  message: string;
  website?: string;
}

const submit = async (values: FormValues) => {
  const res = await fetchService('contact', {
    body: JSON.stringify(values),
    method: 'POST'
  });
  console.log(res.status);
};

const ContactForm = () => {
  const { control, handleSubmit } = useForm<FormValues>();

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
        <ControlledInput control={control} label="Web sajt" name="website" />
        <ControlledTextArea
          control={control}
          label="Poruka"
          name="message"
          rules={{ required: 'Molimo unesite poruku' }}
        />
        <Button className="!py-3 !px-16 rounded-md">Pošaljite</Button>
      </Form>
    </>
  );
};

export default ContactForm;
