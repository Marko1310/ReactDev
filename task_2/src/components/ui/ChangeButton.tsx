type ChangeButtonProps = {
  value: string;
  onClick: () => void;
};

function ChangeButton({ value, onClick }: ChangeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border bg-white p-2 text-base lg:p-2 lg:px-3 lg:text-lg"
    >
      {value}
    </button>
  );
}

export default ChangeButton;
