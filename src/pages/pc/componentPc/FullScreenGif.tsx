import { Box } from '@chakra-ui/react';
import gif3 from '../../../gifs/yoko-blue.mp4';

const FullScreenGif = () => {
  return (
    <Box w={'100vw'} bg={'white'}>
      <video
        muted
        autoPlay={true}
        playsInline
        preload="true"
        loop
        width="100%"
        height="100%"
      >
        <source src={gif3} type="video/mp4" />
      </video>
    </Box>
  );
};

export default FullScreenGif;
