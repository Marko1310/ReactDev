type InputTextProps = {
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | undefined;
};

function InputText({
  name,
  placeholder,
  label,
  value,
  onChange,
  errorMessage,
}: InputTextProps) {
  return (
    <div className="">
      <label>{label}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-text bg-foreground font-montserrat h-14 w-full rounded-md border pl-2 text-lg font-light transition-all focus-within:border hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
      />
      {errorMessage && (
        <span className="text-sm font-light text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputText;
