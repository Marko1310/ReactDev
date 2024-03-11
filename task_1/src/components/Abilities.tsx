type abilitiesProps = {
  abilities: {
    skill: string;
    level: number;
  }[];
};

function Abilities({ abilities }: abilitiesProps) {
  return (
    <div className="w-full">
      <h3 className="mb-4 border-b border-green-500 text-center text-lg font-bold">
        Abilities
      </h3>
      <div className="flex flex-col gap-5">
        {abilities.map((ability, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h5 className="text-center font-semibold">{ability.skill}</h5>
              <div className="relative h-8 w-full overflow-hidden rounded-lg bg-purple-400">
                <span
                  className={`absolute flex h-full items-center justify-end rounded-lg bg-purple-300 pr-1`}
                  style={{ width: `${ability.level}%` }}
                >
                  {ability.level}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Abilities;
