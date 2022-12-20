import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import icon from '../../../images/icon.webp';

import gif3 from '../../../gifs/jump-big.mp4';

const QAndA = () => {
  return (
    <Box bg={'black'} color={'white'} fontSize={'xs'} pb={20}>
      <Center flexDir={'column'}>
        <Text mt={14} fontSize={'md'} borderBottom={'2px'}>
          お問い合わせ
        </Text>
        <Text mt={5} fontSize={'xl'}>
          info@sekaizutto.com
        </Text>
        <Text mt={28} fontSize={'3xl'} borderBottom={'2px'} pb={3}>
          Q&A
        </Text>
      </Center>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            何を教えてもらえるの？
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>個々の物語を立ち上げる技術</Text>
          <Text>
            わからないわからないもの、予測できないものへの向き合い方。
          </Text>
          <Text>世界にうっとりしたり,</Text>
          <Text>ときめいたりるためのヒント。</Text>
          <Text>前向きであるための方法</Text>
        </Box>
      </Box>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            小学生だけど大丈夫？
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>もちろん</Text>
        </Box>
      </Box>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            どのような倫理が通用しますか?
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>不思議さを不思議さのまま取り扱えるような</Text>
        </Box>
      </Box>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            授業日以外には何がありますか？
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>それぞれの状況に応じて</Text>
          <Text>各自で制作をしてもらいます。</Text>
          <Text>随時メールやオンラインで</Text>
          <Text>コミュニケーションが可能です。</Text>
        </Box>
      </Box>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            火は使えますか？
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>火は使えない</Text>
          <Text>ただ僕は焚き火が大事だと</Text>
          <Text>２年前に学んだよ</Text>
        </Box>
      </Box>
      <Box mt={10} borderBottom={'1px'} w={'100vw'} pb={14} mb={10}>
        <Flex ml={10}>
          <img src={icon} alt="logo" width={32} />
          <Text position={'relative'} fontSize={'md'} ml={5}>
            次回の開講はありますか
          </Text>
        </Flex>
        <Box ml={24} mt={5} w={'200px'}>
          <Text>未来はわからない</Text>
        </Box>
      </Box>
      <Box m={0} p={0} width={'100vw'}>
        <video
          muted
          autoPlay={true}
          playsInline
          preload="true"
          loop
          width={'100%'}
        >
          <source src={gif3} type="video/mp4" />
        </video>
      </Box>
      <Center fontSize="2xl" mt={10}>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
          target={'blank'}
        >
          <Text
            mx={12}
            py={2}
            border={'2px'}
            rounded={'full'}
            px={10}
            bg={'white'}
            color={'black'}
          >
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

export default QAndA;
