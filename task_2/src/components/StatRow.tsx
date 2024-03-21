import {
  ChangeKeysType,
  TeamKeysType,
  TeamStatsType,
} from '../types/dataTypes';
import ChangeButton from './ui/ChangeButton';

type StatRowProps = {
  title: string;
  fieldName: keyof TeamStatsType;
  team1Data: number;
  team2Data: number;
  callbackFn: (
    team: TeamKeysType,
    fieldName: keyof TeamStatsType,
    change: ChangeKeysType,
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
          value="+"
          onClick={() => callbackFn('team1', fieldName, 'increase')}
        />
        <p className="px-2 font-bold">{team1Data}</p>
        <ChangeButton
          value="-"
          onClick={() => callbackFn('team1', fieldName, 'decrease')}
        />
      </td>
      <th className="py-4 font-normal">{title}</th>
      <td className="flex items-center justify-end p-2">
        <ChangeButton
          value="+"
          onClick={() => callbackFn('team2', fieldName, 'increase')}
        />
        <p className="px-2 font-bold">{team2Data}</p>
        <ChangeButton
          value="-"
          onClick={() => callbackFn('team2', fieldName, 'decrease')}
        />
      </td>
    </tr>
  );
}

export default StatRow;
