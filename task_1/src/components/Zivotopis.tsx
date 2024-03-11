import Profile from './Profile';
import Container from './Container';
import GeneralInformation from './GeneralInformation';
import Abilities from './Abilities';

function Zivotopis() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-4 align-middle">
      <Profile />
      <Container>
        <GeneralInformation />
      </Container>
      <Container>
        <Abilities />
      </Container>
    </div>
  );
}

export default Zivotopis;
