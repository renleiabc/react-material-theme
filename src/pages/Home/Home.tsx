import { Stack } from '@mui/material';
import MainContainer from '@/components/Container/MainContainer';
import { ButtonsView } from './components/ButtonsView';
import { AccordionView } from './components/AccordionView';
import { BaseColorView } from './components/BaseColorView';
import { IconButtonView } from './components/IconButtonView';
import { FABView } from './components/FABView';
import { ToggleButtonGroupView } from './components/ToggleButtonGroupView';
import { ToggleButtonView } from './components/ToggleButtonView';
import { BadgeView } from './components/BadgedView';
import { SwitchView } from './components/SwitchView';
import { AppBarView } from './components/AppBarView';
import { AvatarView } from './components/AvatarView';
import { AlertView } from './components/AlertView';
import { CardView } from './components/CardView';

const Home = () => {
  return (
    <>
      <MainContainer>
        <BaseColorView />
        <Stack spacing={6}>
          <ButtonsView />
          <IconButtonView />
          <FABView />
          <ToggleButtonView />
          <ToggleButtonGroupView />
          <SwitchView />
          <CardView />
          <BadgeView />
          <AvatarView />
          <AppBarView />
          <AccordionView />
          <AlertView />
        </Stack>
      </MainContainer>
    </>
  );
};

export default Home;
