function CurrentDate() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <div className="mb-4 flex h-fit w-full justify-center">
      <p className="text-xl tracking-wide">{formattedDate}</p>
    </div>
  );
}

export default CurrentDate;
