import ChangeButton from './ChangeButton';
import { TeamStatsType } from './Main';

type StatRowProps = {
  title: string;
  fieldName: keyof TeamStatsType;
  team1Data: number;
  team2Data: number;
  callbackFn: (
    team: 'team1' | 'team2',
    fieldName: keyof TeamStatsType,
    change: 'increment' | 'decrement',
  ) => void;
};

function StatRow({
  title,
  fieldName,
  team1Data,
  team2Data,
  callbackFn,
}: StatRowProps) {
  return (
    <tr>
      <td className="flex items-center justify-start p-2">
        <ChangeButton
          type="+"
          onClick={() => callbackFn('team1', fieldName, 'increment')}
        />
        <p className="px-2">{team1Data}</p>
        <ChangeButton
          type="-"
          onClick={() => callbackFn('team1', fieldName, 'decrement')}
        />
      </td>
      <th className="py-4 font-normal">{title}</th>
      <td className="flex items-center justify-end p-2">
        <ChangeButton
          type="+"
          onClick={() => callbackFn('team2', fieldName, 'increment')}
        />
        <p className="px-2">{team2Data}</p>
        <ChangeButton
          type="-"
          onClick={() => callbackFn('team2', fieldName, 'decrement')}
        />
      </td>
    </tr>
  );
}

export default StatRow;
