import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import logo from '../../../svgs/logo2.webp';

const Header = () => {
  return (
    <Box
      fontSize={[null, 'xs', 'xs', 'xs', 'md']}
      sx={{ WebkitTextStroke: '0.8px' }}
      bg={'white'}
      h={24}
      letterSpacing={'2px'}
    >
      <Flex
        w={'100vw'}
        // justifyContent={'space-around'}
        pt={8}
        alignItems={'center'}
        pl={20}
      >
        <Box mt={2} ml={5} width={[null, 200, 200, 300]}>
          <img src={logo} alt="logo" width={400} />
        </Box>
        <Flex
          justifyContent={'space-around'}
          w={'45%'}
          mt={2}
          position={'absolute'}
          right={28}
        >
          <Link to="introduction" smooth={true} spy={true}>
            <Box sx={{ cursor: 'grab' }}>コース内容紹介</Box>
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
          >
            申し込み
          </a>
          <Link to="map" smooth={true} offset={-50} spy={true}>
            <Box sx={{ cursor: 'grab' }}>アクセス</Box>
          </Link>
          <Link to="contact" smooth={true} offset={-50} spy={true}>
            <Box sx={{ cursor: 'grab' }}>お問い合わせ</Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
