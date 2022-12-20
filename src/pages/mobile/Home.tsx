import { useEffect, useState } from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import KitaruImage from '../../copmonent/KitaruImage';
import wonder from '../../svgs/logo3.webp';
import wonderTitle from '../../svgs/wonderTitle.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import yokoLottie from '../../lottie/yoko-blue-lottie2.json';
import MovePhotoMovie from './componentMobile/MovePhotoMovie';
import sandStorm from '../../gifs/sand-storm.mp4';
import logoMini from '../../svgs/logo-mini.svg';
import Introduction from './componentMobile/Introduction';
import GetMember from './componentMobile/GetMember';
import SliderAndTeacher from './componentMobile/SliderAndTeacher';
import PlaceAndMap from './componentMobile/PlaceAndMap';
import QAndA from './componentMobile/QAndA';
import FooterLogos from './componentMobile/FooterLogos';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Link as Scroll } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '#home-wonder-image',
      { opacity: 1 },
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 3,
        scrollTrigger: {
          trigger: '#home-wonder-image',
          start: 'top 100px',
          end: 'bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

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

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    !openMenu &&
      gsap.to('#menu-bar', {
        y: -400,
      });
    openMenu &&
      gsap.to('#menu-bar', {
        y: 0,
      });
  }, [openMenu]);

  return (
    <Box bg="white" fontWeight={'bold'}>
      <Box position={'relative'} zIndex={2000} bg="white">
        <Flex justify={'center'} maxW={150}>
          <Box position={'relative'} left={20}>
            <KitaruImage />
          </Box>
        </Flex>
        <Box id={'home-wonder-image'}>
          <Flex
            justify={'center'}
            position="relative"
            top={-14}
            marginBottom={-12}
          >
            <img src={wonder} alt="wonder" width={320} />
          </Flex>
          <Flex
            justify={'center'}
            paddingY={5}
            fontWeight={'bold'}
            fontSize={'md'}
          >
            <Text>わたしはヴィジョン?</Text>
          </Flex>
        </Box>
      </Box>
      <Box position={'sticky'} top={-1} zIndex={1000} h={10} m={0}>
        <Flex
          justify={'space-between'}
          alignItems={'center'}
          bg="white"
          w="100vw"
          m={0}
          py={2}
        >
          <img src={wonderTitle} alt="wonderTitle" width={250} />
          <Button
            onClick={() => setOpenMenu(!openMenu)}
            colorScheme="white"
            variant="ghost"
          >
            <GiHamburgerMenu size={40} />
          </Button>
        </Flex>
        <Center
          w={'100vw'}
          bg={'white'}
          h={400}
          flexDir={'column'}
          justifyContent={'space-around'}
          borderBottom={'1px'}
          fontSize={'xl'}
          position="relative"
          top={-1}
          id="menu-bar"
          zIndex={-1000}
          fontWeight={'extrabold'}
        >
          <Box height={16} overflow={'hidden'}>
            <img src={logoMini} alt={'logo-mini'} width={80} />
          </Box>
          <Scroll
            to="introduction"
            smooth={true}
            onClick={() => setOpenMenu(false)}
          >
            コース内容紹介
          </Scroll>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
          >
            申し込み
          </a>
          <Scroll to="map" smooth={true} onClick={() => setOpenMenu(false)}>
            アクセス
          </Scroll>
          <Scroll to="contact" smooth={true} onClick={() => setOpenMenu(false)}>
            お問い合わせ
          </Scroll>
        </Center>
      </Box>
      <Box overflow={'hidden'} minHeight={400}>
        <Lottie
          animationData={yokoLottie}
          style={{ transform: 'scale(2.0)' }}
        />
      </Box>
      <Flex
        textAlign={'center'}
        flexDir={'column'}
        marginTop={5}
        fontWeight={'extrabold'}
      >
        <Flex
          fontSize={'xl'}
          alignItems={'center'}
          justifyContent="space-around"
          sx={{ WebkitTextStroke: '0.4px' }}
        >
          <Text as="span">SHIBUYA PARCO</Text>
          <Text as={'span'} fontSize="sm">
            9階
          </Text>
          GAKU
          <Text as="span" fontSize="sm">
            他にて開催中
          </Text>
        </Flex>
        <Text
          fontSize={'xl'}
          fontWeight={'bold'}
          mt={2}
          sx={{ WebkitTextStroke: '0.3px', letterSpacing: '3px' }}
        >
          メンバー募集中！
        </Text>
      </Flex>
      <Flex justify={'center'}>
        <Text fontSize={'4xl'}>▼</Text>
      </Flex>
      <Flex
        fontSize={'4xl'}
        whiteSpace={'nowrap'}
        fontWeight={'bold'}
        paddingTop={10}
        // className="text-3xl-each-text"
        flexDir={'column'}
        alignItems={'center'}
        paddingLeft={2}
        overflow={'hidden'}
        sx={{ WebkitTextStroke: '0.7px' }}
      >
        <Box>
          <Text className="text-3xl-each-text">Googleで検索してもわ</Text>
          <Text className="text-3xl-each-text">からない、不思議なモ</Text>
          <Text className="text-3xl-each-text">ノ・コトに出会いたい。</Text>
          <Text className="text-3xl-each-text">誰のためでもない、あ</Text>
          <Text className="text-3xl-each-text">なたがつくる、あなた</Text>
          <Text className="text-3xl-each-text">の物語を発信するメディ</Text>
          <Text className="text-3xl-each-text">アラボ。</Text>
        </Box>
      </Flex>
      <MovePhotoMovie />
      <Flex
        position={'relative'}
        top={-500}
        transformOrigin={'center'}
        overflow="hidden"
        height={500}
        justifyContent="center"
        alignItems={'center'}
        w="cal(100vw)"
        marginBottom={-500}
      >
        <video
          src={sandStorm}
          style={{ transform: 'rotate(90deg) scale(2.0)' }}
          width={600}
          muted
          autoPlay={true}
          playsInline
          preload="auto"
          loop
        ></video>
        <Text
          zIndex={10}
          position="absolute"
          textColor={'white'}
          fontSize="3xl"
          fontWeight={'bold'}
          sx={{
            WebkitTextStroke: '1px',
            letterSpacing: '3px',
            writingMode: 'vertical-rl',
          }}
        >
          僕たちは
          <br />
          孤独な
          <br />
          駱駝 （らくだ）なのか？
        </Text>
      </Flex>
      <GetMember />
      <Box id={'introduction'}>
        <Introduction />
      </Box>
      <SliderAndTeacher />
      <Box id={'map'}>
        <PlaceAndMap />
      </Box>
      <Box id={'contact'}>
        <QAndA />
      </Box>
      <FooterLogos />
    </Box>
  );
};

export default Home;
