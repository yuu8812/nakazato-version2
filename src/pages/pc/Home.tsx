import { Box } from '@chakra-ui/react';
import FooterLogos from '../mobile/componentMobile/FooterLogos';
import FirstPage from './componentPc/FirstPage';
import FullScreenGif from './componentPc/FullScreenGif';
import GetMemberAndMovie from './componentPc/GetMemberAndMovie';
import Header from './componentPc/Header';
import Introduction from './componentPc/Introduction';
import Map from './componentPc/Map';
import Media from './componentPc/Media';
import QandA from './componentPc/QandA';
import WaveAndText from './componentPc/WaveAndText';
import WaveMot from './componentPc/WaveMot';

const Home = () => {
  return (
    <Box>
      <Box position={'fixed'} top={0} zIndex={2000} overflow="hidden">
        <Header />
      </Box>
      <Box position={'relative'} pb={'700px'} overflow="hidden">
        <Box position={'fixed'} top={60} zIndex={20} w={'100vw'}>
          <FirstPage />
        </Box>
      </Box>
      <Box h={'auto'} overflow="hidden">
        <WaveAndText />
      </Box>
      <Box position={'sticky'} top={0} zIndex={20} overflow="hidden">
        <GetMemberAndMovie />
      </Box>
      <Box position={'relative'} zIndex={60} top={0}>
        <Introduction />
      </Box>
      <Box position={'relative'} zIndex={20} bg={'white'} overflow="hidden">
        <Media />
      </Box>
      <Box position={'relative'} top={0} zIndex={20} overflow="hidden">
        <WaveMot />
      </Box>
      <Box position={'relative'} zIndex={20} bg={'white'} overflow="hidden">
        <FullScreenGif />
      </Box>
      <Box position={'relative'} zIndex={20} bg={'white'} overflow="hidden">
        <Map />
      </Box>
      <Box position={'relative'} zIndex={20} bg={'white'} overflow="hidden">
        <QandA />
      </Box>
      <Box
        position={'relative'}
        zIndex={60}
        bg={'white'}
        sx={{ overscrollBehavior: 'none' }}
        overflow="hidden"
      >
        <Box overflow="hidden">
          <FooterLogos />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
