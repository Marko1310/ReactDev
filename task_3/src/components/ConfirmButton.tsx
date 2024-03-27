type ConfirmButtonProps = {
  checked: boolean;
  handleCheckBoxChange: () => void;
};

function ConfirmButton({ checked, handleCheckBoxChange }: ConfirmButtonProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckBoxChange}
      />{' '}
      I confirm submission
    </label>
  );
}

export default ConfirmButton;
