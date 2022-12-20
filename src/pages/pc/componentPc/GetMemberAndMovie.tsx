import { useEffect } from 'react';
import logo5 from '../../../svgs/logo5.svg';
import Gorilla from '../../../gifs/gorilla-big.mp4';
import Finger from '../../../gifs/finger.mp4';
import Guitar from '../../../gifs/guitar.mp4';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetMemberAndMovie = () => {
  useEffect(() => {
    gsap.to('#phone-movie', {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top 50px',
        end: 'top 0px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member1', {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top -50px',
        end: 'top -100px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member2', {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top -70px',
        end: 'top -130px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member3', {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top -70px',
        end: 'top -130px',
        scrub: true,
      },
    });
  }, []);

  return (
    <Box
      bg={'white'}
      h="100vh"
      w={'100vw'}
      position={'relative'}
      sx={{ WebkitTextStroke: '1.2px', letterSpacing: '2px' }}
      display="block"
    >
      <Center
        position="relative"
        justifyContent="space-around"
        id={'phone-movie'}
        bg={'white'}
        mx={20}
      >
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={'100%'}
            height={700}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={Gorilla} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={'100%'}
            style={{ zIndex: 1 }}
            height={700}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={Finger} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <img
            // loading="lazy"
            src={logo5}
            alt="logo"
            width={'100%'}
            style={{ zIndex: 1 }}
            height={700}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={Guitar} type="video/mp4" />
          </video>
        </Flex>
      </Center>
      <Box
        w={'100%'}
        // px={20}
        // pl={8}
        position={'absolute'}
        top={72}
        left={'17%'}
        fontSize={'3xl'}
        // visibility={'hidden'}
      >
        <Text id="get-member1" opacity={0} sx={{ fontSize: '28px' }}>
          メンバー募集
        </Text>
        <Box
          id="get-member2"
          opacity={0}
          sx={{
            letterSpacing: '2px',
            fontSize: '15px',
            WebkitTextStroke: '0.7px',
          }}
          ml={3}
          lineHeight={'30px'}
        >
          <Text mb={5} mt={2}>
            こういう人に来て欲しいです。
          </Text>
          <Text>何かを作ってみたい人</Text>
          <Text>物語に興味がある人</Text>
          <Text>夢中になれるものを探している人</Text>
          <Text>モヤモヤしている人</Text>
          <Text>退屈な人</Text>
          <Text>世界をまだ僅かに信じている人</Text>
          <Text>誰にも認められない異能を持っているような気がする人</Text>
          <Text>不思議な夢を見る人</Text>
          <Text>宇宙人</Text>
        </Box>
        <Text
          sx={{ writingMode: 'vertical-rl' }}
          textColor={'black'}
          fontSize="3xl"
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          id="get-member3"
          opacity={0}
          height={'400px'}
          position={'absolute'}
          right={350}
          top={-100}
        >
          僕たちは
          <br />
          孤独な
          <br />
          駱駝 （らくだ）なのか？
        </Text>
      </Box>
    </Box>
  );
};

export default GetMemberAndMovie;
