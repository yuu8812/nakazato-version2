import { Box, Center, Link, Text } from '@chakra-ui/react';
import logo6 from '../../../svgs/logo6.webp';
import mot1 from '../../../images/mot1.webp';
import mot2 from '../../../images/mot2.webp';
import mot3 from '../../../images/mot3.webp';
import mot4 from '../../../images/mot4.webp';

const WaveMot = () => {
  return (
    <Box
      paddingTop={40}
      overflow={'hidden'}
      height={'2400px'}
      bg={'white'}
      sx={{
        WebkitTextStroke: '0.5px',
        letterSpacing: '2px',
        lineHeight: '23px',
      }}
      fontSize={'13px'}
    >
      <img
        src={logo6}
        alt="logo"
        loading="lazy"
        width={1000}
        style={{ transform: 'scale(2.5)' }}
      />
      <Box
        bg={'black'}
        position={'relative'}
        zIndex={1}
        color={'white'}
        pb={40}
      >
        <Center paddingTop={40} flexDir={'column'}>
          <img src={mot1} alt="mot" loading="lazy" width={400} height={300} />
          <Text mt={8}>もうちょっとマシな世界を生きたいし、</Text>
          <Text>もうちょいマシな物語を作ることに貢献したい</Text>
        </Center>
        <Center paddingTop={8} flexDir={'column'}>
          <img src={mot2} alt="mot" loading="lazy" width={400} height={300} />
          <Text mt={8}>選択する間も無く送り届けられる情報の渦と</Text>
          <Text>消費すらされなかった大量のゴミの中で、散り散り、</Text>
          <Text>バラバラになった魂をかき集め、名前をつける、</Text>
          <Text>お気に入りの服を着る、秘密の石をお守りに旅に出る</Text>
        </Center>
        <Center paddingTop={8} flexDir={'column'}>
          <img src={mot3} alt="mot" loading="lazy" width={400} height={300} />
          <Text mt={8}>実践の実践の中から生まれる出会いに、</Text>
          <Text>ときめいて、傷ついて、転がって</Text>
          <Text>未開の地に立って、はじめての感情に視察をする</Text>
          <Text>「やあ」「やあ」</Text>
        </Center>
        <Center paddingTop={8} flexDir={'column'}>
          <img src={mot4} alt="mot" loading="lazy" width={400} height={300} />
          <Text mt={8}>関係性は無限大。思い出が駆け巡り、物語になる,</Text>
          <Text>「すごい気持ちにさせてくれてありがとう！」</Text>
          <Text mt={8}>
            世界との関わりの中から個々の物語を立ち上げる準備をしよう
          </Text>
          <Text>誰のためでもない、あなたがつくる、あなたの物語</Text>
          <Text>取るに足らない、些細な僕らの人生を、</Text>
          <Text>地球の一部としてワンダー</Text>
          <Text mt={8}>「ここはどこ？」</Text>
          <Text>「ここは世界ずっとWONDER」</Text>
        </Center>
        <Center color={'black'} fontSize="2xl" mt={10} flexDir={'column'}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
            bg={'white'}
            rounded={'full'}
          >
            <Text mx={16} py={5}>
              申し込み
            </Text>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
            borderBottom={'2px'}
            fontSize={'2xl'}
            mt={20}
            w={'max'}
            color={'white'}
          >
            申し込みフォームはこちら
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default WaveMot;
