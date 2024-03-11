type generalInfoProps = {
  generalInfo: {
    info: string;
    data: string;
  }[];
};

function GeneralInformation({ generalInfo }: generalInfoProps) {
  return (
    <div>
      <h2 className="mb-4 w-full border-b border-green-500 text-center text-xl font-semibold">
        General information
      </h2>
      <div className="flex flex-col justify-between gap-6">
        {generalInfo.map((el, index) => {
          return (
            <div key={index} className="flex justify-between">
              <p className="font-semibold">{el.info}:</p>
              <p>{el.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GeneralInformation;
