import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import icon from '../../../images/icon.webp';

import gif3 from '../../../gifs/jump-big.mp4';

const QandA = () => {
  return (
    <Center
      flexDir={'column'}
      pt={40}
      bg={'black'}
      color={'white'}
      fontSize={'md'}
      id="contact"
      overflow={'hidden'}
    >
      <Center
        flexDir={'column'}
        sx={{ WebkitTextStroke: '0.8px', letterSpacing: '2px' }}
      >
        <Text mt={14} fontSize={'md'} borderBottom={'2px'} pb={2}>
          お問い合わせ
        </Text>
        <Text
          mt={10}
          fontSize={'4xl'}
          sx={{ WebkitTextStroke: '1.8px', letterSpacing: '1px' }}
        >
          info@sekaizutto.com
        </Text>
        <Text
          mt={40}
          fontSize={'4xl'}
          borderBottom={'4px'}
          pb={3}
          sx={{ WebkitTextStroke: '1.8px', letterSpacing: '2px' }}
        >
          Q&A
        </Text>
      </Center>
      <Flex
        wrap={'wrap'}
        justifyContent="space-around"
        mt={10}
        w={'70%'}
        sx={{ lineHeight: '30px' }}
      >
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              何を教えてもらえるの？
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>個々の物語を立ち上げる技術</Text>
            <Text>
              わからないわからないもの、予測できないものへの向き合い方。
            </Text>
            <Text>世界にうっとりしたり,</Text>
            <Text>ときめいたりるためのヒント。</Text>
            <Text>前向きであるための方法</Text>
          </Box>
        </Box>
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              小学生だけど大丈夫？
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>もちろん</Text>
          </Box>
        </Box>
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              どのような倫理が通用しますか?
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>不思議さを不思議さのまま取り扱えるような</Text>
          </Box>
        </Box>
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              授業日以外には何がありますか？
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>それぞれの状況に応じて</Text>
            <Text>各自で制作をしてもらいます。</Text>
            <Text>随時メールやオンラインで</Text>
            <Text>コミュニケーションが可能です。</Text>
          </Box>
        </Box>
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              火は使えますか？
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>火は使えない</Text>
            <Text>ただ僕は焚き火が大事だと</Text>
            <Text>２年前に学んだよ</Text>
          </Box>
        </Box>
        <Box mt={10} borderBottom={'1px'} w={'30vw'} pb={14}>
          <Flex ml={10}>
            <img src={icon} alt="logo" width={32} />
            <Text position={'relative'} fontSize={'md'} ml={5}>
              次回の開講はありますか
            </Text>
          </Flex>
          <Box ml={24} mt={5} fontSize={'sm'}>
            <Text>未来はわからない</Text>
          </Box>
        </Box>
      </Flex>
      <Center mt={40} flexDir={'column'} overflow={'hidden'}>
        <Box
          m={0}
          p={0}
          width={'100vw'}
          // mt={20}
          overflow={'hidden'}
          zIndex={0}
          maxH={600}
        >
          <video
            muted
            autoPlay={true}
            playsInline
            preload="true"
            loop
            width={'100%'}
            height={500}
          >
            <source src={gif3} type="video/mp4" />
          </video>
        </Box>
        <Center
          zIndex={30}
          flexDir={'column'}
          position={'absolute'}
          sx={{ WebkitTextStroke: '1.2px', letterSpacing: '2px' }}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
          >
            <Text
              mx={12}
              py={3}
              border={'4px'}
              rounded={'full'}
              px={20}
              bg={'white'}
              color={'black'}
              fontSize={'3xl'}
            >
              申し込み
            </Text>
          </Link>
          <Link
            borderBottom={'2px'}
            fontSize={'2xl'}
            mt={20}
            w={'max'}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
          >
            申し込みフォームはこちら
          </Link>
        </Center>
      </Center>
    </Center>
  );
};

export default QandA;
