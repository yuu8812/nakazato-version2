import { Center, Text } from '@chakra-ui/react';
import { GetWindowSize } from '../../../hooks/GetWindowSize';

const Map = () => {
  const { width } = GetWindowSize();
  return (
    <Center
      flexDir={'column'}
      pt={20}
      fontWeight={'bold'}
      id="map"
      pb={20}
      bg={'white'}
      zIndex={100}
      position={'relative'}
      sx={{ WebkitTextStroke: '0.4px' }}
    >
      <Text my={14} fontSize={'xl'} borderBottom={'2px'}>
        アクセス
      </Text>
      <Text fontSize={'xl'}>
        SHIBUYA PARCO{' '}
        <Text as={'span'} fontSize={'md'}>
          9階
        </Text>{' '}
        GAKU
      </Text>
      <Text fontSize={'sm'} my={10}>
        渋谷駅より徒歩5分
      </Text>
      <Center fontSize={'xs'} flexDir={'column'}>
        <Text>所在地</Text>
        <Text py={2}>東京都渋谷区宇多川町15-1</Text>
        <Text pb={10}>渋谷PARCO 9階 クリエイティブスタジオ GAKU</Text>
      </Center>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.5064440598726!2d139.69880524921737!3d35.66209632590496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8e2fe2173%3A0x1adbb1909538391b!2z5riL6LC3UEFSQ08!5e0!3m2!1sja!2sjp!4v1665570525820!5m2!1sja!2sjp"
        loading="lazy"
        className="pb-20"
        width={width - 100}
        height={600}
        style={{ background: 'white' }}
      />
    </Center>
  );
};

export default Map;
