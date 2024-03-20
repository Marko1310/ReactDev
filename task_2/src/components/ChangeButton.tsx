type ChangeButtonProps = {
  type: '+' | '-';
  onClick: () => void;
};

function ChangeButton({ type, onClick }: ChangeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border bg-white p-2 text-base lg:p-2 lg:px-3 lg:text-lg"
    >
      {type}
    </button>
  );
}

export default ChangeButton;
