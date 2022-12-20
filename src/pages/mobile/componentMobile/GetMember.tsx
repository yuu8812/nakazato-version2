import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const GetMember = () => {
  useEffect(() => {
    gsap.fromTo(
      '#get-member',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '#get-member',
          start: 'top bottom',
          scrub: true,
          end: 'top center',
        },
      }
    );
  }, []);

  return (
    <Box my={20} ml={8} id="get-member">
      <Text fontWeight={'semibold'} fontSize={'xl'}>
        メンバー募集
      </Text>
      <Box fontSize={'xs'} fontWeight={'semibold'} sx={{ lineHeight: '20px' }}>
        <Text my={5}>こういう人に来て欲しいです。</Text>
        <Text>何かを作ってみたい人</Text>
        <Text>物語に興味がある人</Text>
        <Text>夢中になれるものを探している人</Text>
        <Text>モヤモヤしている人</Text>
        <Text>退屈な人</Text>
        <Text>世界をまだ僅かに信じている人</Text>
        <Text>
          誰にも認められない誰にも認められない異能を持っているような気がする人
        </Text>
        <Text>不思議な夢を見る人</Text>
        <Text>宇宙人</Text>
      </Box>
    </Box>
  );
};

export default GetMember;
