import InputText from './UI/InputText';
import Title from './UI/Title';

type AddressProps = {
  name: string;
  country: string;
  address: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  errorName: string | undefined;
  errorAddress: string | undefined;
};

function Address({
  name,
  country,
  address,
  onChange,
  errorName,
  errorAddress,
}: AddressProps) {
  return (
    <div className="flex flex-col">
      <Title title="Address" />
      <InputText
        name="name"
        placeholder="Name"
        label="Name"
        value={name}
        onChange={onChange}
        errorMessage={errorName}
      />

      <label>Country</label>
      <select
        name="country"
        value={country}
        onChange={onChange}
        className="text-text bg-foreground font-montserrat h-14 w-full rounded-md border pl-2 text-lg font-light transition-all focus-within:border hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
      >
        <option value="Croatia">Croatia</option>
        <option value="France">France</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>

      <InputText
        name="address"
        placeholder="Address"
        label="Address"
        value={address}
        onChange={onChange}
        errorMessage={errorAddress}
      />
    </div>
  );
}

export default Address;
