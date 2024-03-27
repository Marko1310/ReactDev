type InputRadioProps = {
  name: string;
  paymentType: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputRadio({
  name,
  paymentType,
  value,
  label,
  onChange,
}: InputRadioProps) {
  return (
    <div className="flex gap-2">
      <input
        name={name}
        type="radio"
        value={value}
        checked={paymentType === value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
}

export default InputRadio;
