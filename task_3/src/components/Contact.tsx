import InputText from './UI/InputText';
import Title from './UI/Title';

type ContactProps = {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorEmail: string | undefined;
};

function Contact({ email, onChange, errorEmail }: ContactProps) {
  return (
    <div>
      <Title title="Contact" />
      <InputText
        name="email"
        placeholder="Email address"
        label="Email"
        value={email}
        onChange={onChange}
        errorMessage={errorEmail}
      />
    </div>
  );
}

export default Contact;
