import { data } from '../data/data';

function GeneralInformation() {
  return (
    <div>
      <h2 className="mb-4 w-full border-b border-green-500 text-center text-xl font-semibold">
        General information
      </h2>
      <div className="flex flex-col justify-between gap-6">
        {data.generalInfo.map((el) => {
          return (
            <div className="flex justify-between">
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
