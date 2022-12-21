import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import KitaruImage from '../../../copmonent/KitaruImage';
import wonder from '../../../svgs/logo3.webp';

const FirstPage = () => {
  return (
    <Box top={0}>
      <Box
        position={'absolute'}
        right={40}
        zIndex={10}
        top={-32}
        m={0}
        p={0}
        maxW={40}
      >
        <KitaruImage />
      </Box>
      <Box id={'home-wonder-image'}>
        <Flex
          justify={'center'}
          position="relative"
          top={-24}
          marginBottom={'-24'}
        >
          <Box width={[null, 400, 400, 500, 600]}>
            <img src={wonder} alt="wonder" width={600} height={'400px'} />
          </Box>
        </Flex>
        <Flex
          justify={'center'}
          paddingY={2}
          fontSize={[null, '2xl', '2xl', '3xl', '3xl']}
          sx={{
            WebkitTextStroke: '1.5px',
            letterSpacing: '5px',
          }}
        >
          <Text my={3} fontWeight={'900px'}>
            わたしはヴィジョン?
          </Text>
        </Flex>
      </Box>
      <Flex
        textAlign={'center'}
        flexDir={'column'}
        marginTop={5}
        sx={{ WebkitTextStroke: '1px' }}
      >
        <Center alignItems={'center'}>
          <Text as="span" fontSize="xl">
            SHIBUYA PARCO
          </Text>
          <Text
            as={'span'}
            fontSize={'md'}
            mx={4}
            sx={{ WebkitTextStroke: '0.8px' }}
          >
            9階
          </Text>
          <Text as="span" fontSize={'xl'}>
            GAKU
          </Text>
          <Text as="span" mx={4} sx={{ WebkitTextStroke: '0.8px' }}>
            他にて開催中
          </Text>
        </Center>
        <Text mt={2} fontSize={'2xl'}>
          メンバー募集中！
        </Text>
      </Flex>
      <Center fontSize="2xl" mt={10}>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
          target={'blank'}
        >
          <Text
            mt={20}
            py={4}
            rounded={'full'}
            px={16}
            bg={'white'}
            color={'bold'}
            sx={{
              letterSpacing: '2px',
              WebkitTextStroke: '1px',
              border: '0.2rem solid',
              zIndex: 9999,
            }}
          >
            申し込み
          </Text>
        </Link>
      </Center>
    </Box>
  );
};

export default FirstPage;
