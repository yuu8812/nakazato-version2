import { Box, Center, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import human from '../../../gifs/human.gif';
import moon from '../../../images/moon.webp';
import image2 from '../../../images/mark.webp';
import logo from '../../../images/logo.webp';
import image1 from '../../../images/3.webp';
import Vimeo from '@u-wave/react-vimeo';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LazyLoad from 'react-lazyload';

const Media = () => {
  return (
    <Box pt={40} bg={'white'}>
      <Center w={'100vw'}>
        <Flex
          w={'100%'}
          pt={40}
          wrap={'wrap'}
          fontSize={'9px'}
          background={'white'}
          sx={{ borderTop: '10px solid', WebkitTextStroke: '0.4px' }}
          justifyContent={'space-between'}
          px={20}

          // alignItems={'start'}
        >
          <Center alignItems={'center'} flexDir={'column'} mb={10}>
            <Center h={400}>
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
                    width={330}
                    height={330}
                  />
                  <Center flexDir={'column'} h={100}>
                    <Text>ドキュメンタリー番組「のんたれ」</Text>
                    <Text my={1}>(Youtube Originals 2019)</Text>
                    <Text>ディレクター</Text>
                  </Center>
                </Center>
              </Link>
            </Center>
          </Center>
          <Center
            className="keen-slider__slide"
            flexDir={'column'}
            w={400}
            mt={-4}
          >
            <Center>
              <iframe
                loading="lazy"
                title="music"
                height="300"
                width="300"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/809489728&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={100}>
              <Text>楽曲「彗星へのアンサー」</Text>
              <Text mt={3}>プロデューサー・歌の登場人物</Text>
            </Center>
          </Center>
          <Box
            flexDir={'column'}
            w={'400px'}
            ml={6}
            position="relative"
            mt={-8}
            sx={{
              WebkitTextStroke: '0.6px',
            }}
          >
            <Box>
              <Text mt={5} fontSize={'xl'} borderBottom={'2px'} w={'max'}>
                講師紹介
              </Text>
              <Text fontSize={'xl'} mt={10}>
                中里龍造
              </Text>
            </Box>
            <Box position="absolute" top={-10} right={36}>
              <img
                loading="lazy"
                alt="human"
                src={human}
                width={100}
                height={100}
                style={{ position: 'relative', top: 20, left: 10 }}
              />
              <img
                loading="lazy"
                src={moon}
                alt="moon"
                width={120}
                height={100}
              />
            </Box>
            <Text fontSize={'xs'}>Nakazato Ryuzo</Text>
            <Text fontSize={'sm'} my={5} mt={20}>
              実験隊／ドキュメンタリー
            </Text>
            <Text
              fontSize={'11.5px'}
              w={'80%'}
              sx={{ lineHeight: '22px', WebkitTextStroke: '0.5px' }}
            >
              制度の境界面にある摩擦に興味を持ち作品創作を行う 主な作品に
              創作あーちすと”のん”の挑戦を追いかけたドキュメンタリー「のんたれ」(Youtube
              Originals)など。
              夢は「いつか異星人に出会った時、ケンカせずに仲良くする技術を発明する」こと。
            </Text>
          </Box>
          <Center alignItems={'center'} w={400} ml={8}>
            <Flex
              flexDir={'column'}
              alignItems={'center'}
              justifyContent="center"
            >
              <Link href="https://www.yumegiwa.co.jp/" target={'blank'} mb={10}>
                <Center flexDir={'column'} h={300} bg={'white'} width={400}>
                  <img loading="lazy" src={image2} alt="image2" width={250} />
                  <img loading="lazy" src={logo} alt="logo" width={400} />
                </Center>
                <Center flexDir={'column'} h={100} mt={-6}>
                  <Text>ミュータントスペース「YUMEGIWA 」</Text>
                  <Text mt={3}>店長</Text>
                </Center>
              </Link>
            </Flex>
          </Center>
          <Center
            flexDir={'column'}
            alignItems="center"
            justifyContent={'center'}
            w={400}
            // bg={'red'}
          >
            <Center>
              <iframe
                loading="lazy"
                title="music2"
                height="300"
                width="300"
                className=""
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415877685&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={60} mt={-16}>
              <Text>AIT Podcast コレクティブとは宇宙意識・学びの拡張</Text>
              <Text my={1} fontSize={'7px'}>
                (AIT 2018)
              </Text>
              <Text>トーク</Text>
            </Center>
          </Center>
          <Spacer />
        </Flex>
      </Center>
      <Box
        fontSize={'9px'}
        background={'white'}
        sx={{ WebkitTextStroke: '0.4px' }}
        ml={'20%'}
      >
        <Box
          flexDir={'column'}
          alignItems="center"
          justifyContent={'center'}
          w={600}
        >
          <Box>
            <LazyLoad height={400}>
              <Vimeo
                video="260878998"
                autoplay={false}
                muted={false}
                width={600}
                height={400}
              />
            </LazyLoad>
            <Center flexDir={'column'} h={100} mt={-8}>
              <Text>ツアー・イベント・パーティー</Text>
              <Text>「静かな集まり」(2018)</Text>
              <Text>DAYDREAM THEATER</Text>
              <Text>オーガナイザー</Text>
            </Center>
          </Box>
        </Box>
        <Box
          flexDir={'column'}
          alignItems="center"
          justifyContent={'center'}
          w={600}
        >
          <Box>
            <LiteYouTubeEmbed id="8viA4Wics9c" title="" />
            <Center flexDir={'column'} h={100} mt={0}>
              <Box>TED×UTokyo How to unravel the unwavering world?</Box>
              <Box className="pt-1">- A method DAYDREAM THEATER</Box>
              <Box className="pt-1">(東京大学2017)</Box>
              <Box className="pt-1">レクチャー</Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Media;
