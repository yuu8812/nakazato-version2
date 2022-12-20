import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo5 from '../../../svgs/logo5.svg';
import Gorilla from '../../../gifs/gorilla-big.mp4';
import Finger from '../../../gifs/finger.mp4';
import Guitar from '../../../gifs/guitar.mp4';

gsap.registerPlugin(ScrollTrigger);

const MovePhotoMovie = () => {
  useEffect(() => {
    gsap.to('#move-phone-movie', {
      x: '-300vw',
      ease: 'none',
      overwrite: true,
      scrollTrigger: {
        trigger: '#move-phone-movie',
        start: 'top top',
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        end: 'bottom -1000px',
      },
    });
  }, []);

  return (
    <Box id="pin-base" overflow={'hidden'} top={0} margin={0} padding={0}>
      <Flex
        position="relative"
        w="300vw"
        h="100vh"
        bg={'white'}
        id="move-phone-movie"
        top={0}
        margin={0}
        padding={0}
      >
        <Flex
          w="100vw"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={Gorilla} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          w="calc(100vw)"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={Finger} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          w="100vw"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={Guitar} type="video/mp4" />
          </video>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovePhotoMovie;
