import Profile from './Profile';
import Container from './Container';
import GeneralInformation from './GeneralInformation';
import Abilities from './Abilities';
import { data } from '../data/data';

function Zivotopis() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-4 align-middle">
      <Profile />
      <Container>
        <GeneralInformation generalInfo={data.generalInfo} />
      </Container>
      <Container>
        <Abilities abilities={data.abilities} />
      </Container>
    </div>
  );
}

export default Zivotopis;
