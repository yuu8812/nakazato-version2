import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import Vimeo from '@u-wave/react-vimeo';

import human from '../../../gifs/human.gif';
import moon from '../../../images/moon.webp';
import image2 from '../../../images/mark.webp';
import logo from '../../../images/logo.webp';
import image1 from '../../../images/3.webp';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';

const SliderAndTeacher = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      // add plugins here
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          if (clicked) return;
          timeout = setTimeout(() => {
            if (!clicked) {
              slider.next();
            }
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        if (!clicked) {
          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        }
      },
    ]
  );

  return (
    <Box>
      <Center flexDir={'column'}>
        <Text
          mt={5}
          fontSize={'2xl'}
          fontWeight={'semibold'}
          borderBottom={'2px'}
        >
          講師紹介
        </Text>
        <img
          loading="lazy"
          alt="human"
          src={human}
          width={100}
          height={100}
          style={{ position: 'relative', top: 20, left: 10 }}
        />
        <img loading="lazy" src={moon} alt="moon" width={120} height={100} />
        <Text fontSize={'xl'} fontWeight={'semibold'}>
          中里龍造
        </Text>
        <Text fontSize={'xs'} fontWeight={'semibold'}>
          Nakazato Ryuzo
        </Text>
        <Text fontSize={'sm'} fontWeight={'semibold'} my={5}>
          実験隊／ドキュメンタリー
        </Text>
        <Text fontSize={'md'} fontWeight={'semibold'} w={'90%'}>
          制度の境界面にある摩擦に興味を持ち作品創作を行う 主な作品に
          創作あーちすと”のん”の挑戦を追いかけたドキュメンタリー「のんたれ」(Youtube
          Originals)など。
          夢は「いつか異星人に出会った時、ケンカせずに仲良くする技術を発明する」こと
        </Text>
      </Center>
      <Box
        color={'white'}
        bg={'black'}
        h="450px"
        w={'100vw'}
        overflow="hidden"
        fontWeight={'semibold'}
        fontSize={'xs'}
        mt={20}
      >
        <div ref={sliderRef} className="keen-slider">
          <Center
            alignItems={'center'}
            flexDir={'column'}
            className="keen-slider__slide"
          >
            <Flex
              flexDir={'column'}
              alignItems={'center'}
              justifyContent="center"
            >
              <Link href="https://www.yumegiwa.co.jp/" target={'blank'}>
                <Center flexDir={'column'} h={300} bg={'white'} width={400}>
                  <img loading="lazy" src={image2} alt="image2" width={250} />
                  <img loading="lazy" src={logo} alt="logo" width={400} />
                </Center>
                <Center flexDir={'column'} h={100} bg={'black'} w={'100%'}>
                  <Text>ミュータントスペース「YUMEGIWA 」</Text>
                  <Text>店長</Text>
                </Center>
              </Link>
            </Flex>
          </Center>
          <Center
            alignItems={'center'}
            flexDir={'column'}
            width={'100vw'}
            className="keen-slider__slide"
          >
            <Center w={'100vw'} h={400}>
              <Link
                href="https://www.youtube.com/watch?v=DOEk-0MeQbI"
                target="blank"
                w={400}
              >
                <Center flexDir={'column'}>
                  <img
                    loading="lazy"
                    src={image1}
                    alt="image1"
                    width={300}
                    height={300}
                  />
                  <Center flexDir={'column'} h={100} bg={'black'} w={'100vw'}>
                    <Text>ドキュメンタリー番組「のんたれ」</Text>
                    <Text>(Youtube Originals 2019)</Text>
                    <Text>ディレクター</Text>
                  </Center>
                </Center>
              </Link>
            </Center>
          </Center>
          <Center
            flexDir={'column'}
            alignItems="center"
            justifyContent={'center'}
            className="keen-slider__slide"
          >
            <Center maxH={300}>
              <iframe
                loading="lazy"
                title="music2"
                height="300"
                width="350"
                className=""
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415877685&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={100} bg={'black'} w={'100vw'}>
              <Text>AIT Podcast コレクティブとは宇宙意識・学びの拡張</Text>
              <Text>(2018)</Text>
              <Text>トーク</Text>
            </Center>
          </Center>
          <Center className="keen-slider__slide" flexDir={'column'}>
            <Center maxH={300}>
              <iframe
                loading="lazy"
                title="music"
                height="300"
                width="350"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/809489728&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={100} bg={'black'} w={'100vw'}>
              <Text>楽曲「彗星へのアンサー」</Text>
              <Text>プロデューサー・歌の登場人物</Text>
            </Center>
          </Center>
          <Center
            flexDir={'column'}
            alignItems="center"
            justifyContent={'center'}
            className="keen-slider__slide"
          >
            <LazyLoad height={300}>
              <Vimeo
                video="260878998"
                autoplay={false}
                muted={false}
                width={380}
                height={300}
              />
            </LazyLoad>
            <Center flexDir={'column'} h={100} bg={'black'} w={'100vw'}>
              <Text>ツアー・イベント・パーティー</Text>
              <Text>「静かな集まり」(2018)</Text>
              <Text>DAYDREAM THEATER</Text>
              <Text>オーガナイザー</Text>
            </Center>
          </Center>
          <Center
            flexDir={'column'}
            alignItems="center"
            justifyContent={'center'}
            className="keen-slider__slide"
            width={400}
          >
            {/* <YouTube
              videoId="8viA4Wics9c"
              opts={{
                width: '350',
                height: '300',
                origin: 'https://www.youtube.com',
              }}
              loading="lazy"
            /> */}
            <Box width={400} height={250} position={'relative'} zIndex={9999}>
              <LiteYouTubeEmbed id="8viA4Wics9c" title="speech" />
            </Box>
            <Center flexDir={'column'} h={100} bg={'black'} w={'100vw'}>
              <Box>TED×UTokyo How to unravel the unwavering world?</Box>
              <Box className="pt-1">- A method DAYDREAM THEATER</Box>
              <Box className="pt-1">(東京大学2017)</Box>
              <Box className="pt-1">レクチャー</Box>
            </Center>
          </Center>
        </div>
      </Box>
      <Box
        w={'100vw'}
        position={'relative'}
        display={'flex'}
        color={'white'}
        justifyContent={'space-between'}
        top={-10}
      >
        <Text
          ml={2}
          onClick={() => {
            instanceRef.current?.prev();
            setClicked(true);
          }}
          fontSize={'2xl'}
        >
          ◀︎
        </Text>
        <Text
          mr={2}
          onClick={() => {
            instanceRef.current?.next();
            setClicked(true);
          }}
          fontSize={'2xl'}
        >
          ▶︎
        </Text>
      </Box>

      <Center fontSize="2xl" mt={10}>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
          target={'blank'}
        >
          <Text mx={12} py={2} border={'2px'} rounded={'full'} px={10}>
            申し込み
          </Text>
        </Link>
      </Center>
      <Center mt={10}>
        <Link
          borderBottom={'2px'}
          fontSize={'xl'}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
          target={'blank'}
        >
          申し込みフォームはこちら
        </Link>
      </Center>
    </Box>
  );
};

export default SliderAndTeacher;
