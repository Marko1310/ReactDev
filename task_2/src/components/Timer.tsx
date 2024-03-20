type TimerProps = {
  minutes: number;
  seconds: number;
};

function Timer({ minutes, seconds }: TimerProps) {
  return (
    <div className="mb-8 flex w-full justify-center text-center">
      <p className="w-4">{minutes}'</p>
      <p className="px-1">:</p>
      <p className="w-4">{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
  );
}

export default Timer;
