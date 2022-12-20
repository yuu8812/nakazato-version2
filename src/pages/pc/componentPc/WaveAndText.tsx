import { Box, Center, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import logo4 from '../../../svgs/logo4.svg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WaveAndText = () => {
  useEffect(() => {
    gsap.fromTo(
      '.text-3xl-each-text',
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.text-3xl-each-text',
          end: 'bottom center',
          start: '200 bottom',
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <Box position={'relative'} mt={80} overflow={'hidden'} zIndex={50}>
      <Center flexDir={'column'}>
        <Center
          top={'40%'}
          position={'absolute'}
          color={'white'}
          whiteSpace={'nowrap'}
          flexDir={'column'}
          ml={10}
          fontSize={[null, '35px', '40px', '48px', '60px']}
          zIndex={40}
        >
          <Box
            position={'relative'}
            sx={{ WebkitTextStroke: '3px', lineHeight: '100px' }}
          >
            <Text className="text-3xl-each-text" sx={{ letterSpacing: '8px' }}>
              Googleで検索してもわからない、不
            </Text>
            <Text
              className="text-3xl-each-text"
              pl={2}
              sx={{ letterSpacing: '11px' }}
            >
              思議なモノ・コトに出会いたい。誰
            </Text>
            <Text className="text-3xl-each-text" sx={{ letterSpacing: '14px' }}>
              のためでもない、あなたがつくる、
            </Text>
            <Text className="text-3xl-each-text" sx={{ letterSpacing: '8px' }}>
              あなたの物語を発信するメディアラボ。
            </Text>
          </Box>
        </Center>
        <Box overflow={'hidden'}>
          <img
            src={logo4}
            alt="logo"
            height={400}
            style={{
              transform: 'scale(1.3)',
              transformOrigin: 'top left',
              zIndex: 50,
            }}
          />
        </Box>
      </Center>
    </Box>
  );
};

export default WaveAndText;
