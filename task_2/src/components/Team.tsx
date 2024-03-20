type teamProps = {
  teamName: string;
  crest: string;
};

function Team({ teamName, crest }: teamProps) {
  return (
    <div className="flex w-fit flex-col items-center justify-end text-center">
      <img className="w-24 lg:w-40" src={crest} alt="crest" />
      <h2 className="text-2xl font-bold">{teamName}</h2>
    </div>
  );
}

export default Team;
