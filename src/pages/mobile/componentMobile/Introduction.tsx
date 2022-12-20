import { Box, Center, Flex, Text } from '@chakra-ui/react';
import WaveMotMobile from './WaveMotMobile';

const Introduction = () => {
  return (
    <Flex borderTop={'4px'} paddingBottom={20} flexDir="column">
      <Flex flexDirection={'column'} w="100vw">
        <Center>
          <Text
            borderBottom={'2px'}
            marginY={2}
            marginTop={10}
            fontSize="md"
            sx={{ WebkitTextStroke: '0.3px' }}
            pb={1}
          >
            プログラム
          </Text>
        </Center>
        <Center flexDirection={'column'}>
          <Text
            fontSize={'2xl'}
            paddingTop={5}
            sx={{ WebkitTextStroke: '0.6px' }}
            pb={2}
          >
            a.ナラティブ
          </Text>
          <Text fontSize={'xs'} sx={{ WebkitTextStroke: '0.3px' }}>
            プライマリーコース/アドバンスドコース
          </Text>
          <Text marginY={'5'} fontSize={'xs'} border={'1px'} paddingX={2}>
            概要
          </Text>
          <Center
            flexDirection={'column'}
            textAlign={'center'}
            fontSize="10px"
            sx={{ lineHeight: '18px' }}
          >
            <Text>
              誰のためでもない、あなたが作る、あなたの物語(ナラティブ)。
              <br />
              未だ語られていない個々の物語を立ち上げる技術を学びます。
            </Text>
            <Text pt={2}>
              プライマリーコースでは、参加者それぞれの興味や好奇心、
              <br />
              問いを掘り下げながら、アイディアを生み出すためのリサーチ手法
              <br />
              を学び、物語のかけらを集めた企画書を制作していきます。
            </Text>
            <Text pt={2}>
              アドバンスドコースでは、様々なメディアでの表現を想定しながら
              <br />
              (映像、写真、文章、ドローイング、パフォーマンス、ゲームなどetc...)
            </Text>
            <Text pt={2}>
              企画を形にする企画を形にする技術を学び、ポートフォリオの制作をします。
              <br />
              どちらのプログラムも基本的にチュートリアル英式のレクチャーで行います。
              <br />
              (受講者一人に対してディレクター＋アシスタントが直接指導します)
            </Text>
          </Center>
        </Center>
        <Flex textAlign={'center'} marginTop={16} justifyContent="center">
          <Flex
            flexDirection={'column'}
            width="40vw"
            justifyContent="space-between"
            mx={5}
          >
            <Text fontSize={'sm'}>1,プライマリーコース</Text>
            <Flex
              flexDirection={'column'}
              justifyContent="space-between"
              height={60}
            >
              <Center flexDirection={'column'}>
                <Text
                  marginY={'5'}
                  fontSize={'xs'}
                  border={'1px'}
                  paddingX={'2'}
                  width="max"
                >
                  制作物
                </Text>
                <Text fontSize={'2xs'}>企画、アイディア</Text>
                <Text fontSize={'2xs'}>(スクラップブック、ZINEなど)</Text>
              </Center>
              <Center flexDirection={'column'}>
                <Text
                  marginY={'5'}
                  fontSize={'xs'}
                  border={'1px'}
                  paddingX={'2'}
                  width="max"
                >
                  対象者
                </Text>
                <Text fontSize={'2xs'}>制作初心者の方</Text>
                <Text fontSize={'2xs'}>
                  アイディアづくりや企画作りを基礎から学びたい方
                </Text>
              </Center>
            </Flex>
          </Flex>
          <Flex
            flexDirection={'column'}
            width="40vw"
            justifyContent="space-between"
            mx={5}
          >
            <Text fontSize={'sm'}>2,アドバンスドコース</Text>
            <Flex
              flexDirection={'column'}
              justifyContent="space-between"
              height={60}
            >
              <Center flexDirection={'column'}>
                <Text
                  marginY={'5'}
                  fontSize={'xs'}
                  border={'1px'}
                  paddingX={'2'}
                  width="max"
                >
                  制作物
                </Text>
                <Text fontSize={'2xs'}>作品、ポートフォリオ</Text>
              </Center>
              <Center flexDirection={'column'}>
                <Text
                  marginY={'5'}
                  fontSize={'xs'}
                  border={'1px'}
                  paddingX={'2'}
                  width="max"
                >
                  対象者
                </Text>
                <Text fontSize={'2xs'}>制作経験者の方</Text>
                <Text fontSize={'2xs'}>
                  アイディアや企画はあるがカタチにできていない方
                </Text>
              </Center>
            </Flex>
          </Flex>
        </Flex>
        <Center
          flexDirection={'column'}
          marginTop={16}
          alignItems="center"
          fontSize={'xs'}
          textAlign="center"
        >
          <Center flexDirection={'column'} maxWidth={'70%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              プログラム
            </Text>
            <Text>レクチャー・WS(ワークショップ)</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊基本的には対話形式のレクチャーを想定しています
            </Text>
          </Center>
          <Center flexDirection={'column'} maxWidth={'70%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              スケジュール
            </Text>
            <Text>各回90~120分 全12回</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊授業日時は参加者と相談して決めていきます
            </Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊隔週ごとに一回ぐらいの頻度を想定し頻度を想定しています
            </Text>
          </Center>
          <Center flexDir={'column'} maxWidth={'70%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              料金
            </Text>
            <Text>各コース</Text>
            <Text>100,000円(税抜)</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊内訳 入学金10,000円 授業料90,000円
            </Text>
          </Center>
          <Center flexDir={'column'} maxWidth={'80%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              支払い方法
            </Text>
            <Text>
              申し込みフォーム記入後、メールにてお支払い方法詳細をお知らせいたします
            </Text>
            <Text>お支払い回数は 1, 2, 4回から選択可能です</Text>
          </Center>
          <Center flexDirection={'column'} maxWidth={'70%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              場所
            </Text>
            <Text>[オフライン]</Text>
            <Text>渋谷 PARCO 9階 GAKU / FabCafe MTRL ほか</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊プログラム内容に応じて決めていきます
            </Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊通うことが難しい場合はオフラインでの受講も可能です
            </Text>
            <Text marginTop={10}>[オンライン]</Text>
            <Text>ZOOM など</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊フィジカルでの対応が必要な場合は
            </Text>
            <Text fontSize={'2xs'} pt={2}>
              それぞれの制作内容や状況に応じて個別に対応していきます
            </Text>
          </Center>
          <Center flexDir={'column'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              定員
            </Text>
            <Text>アドバンスドコース:6名</Text>
            <Text>プライマリーコース:6名</Text>
            <Text fontSize={'2xs'} pt={2}>
              ＊参加者多数の場合は締め切らせていただきます
            </Text>
          </Center>
          <Center flexDir={'column'} maxWidth={'70%'}>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              用意するもの
            </Text>
            <Text>個々の制作内容に応じて決めていきます</Text>
            <Text>準備が必要な場合は各回授業前にお伝えします</Text>
          </Center>
        </Center>
        <Center flexDir={'column'} marginTop={16} fontSize={'xs'}>
          <Center flexDir={'column'} maxW="80%">
            <Text fontSize={'xl'}>b. リサーチ</Text>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              概要
            </Text>
            <Text>
              シーズンごとに設定した同時代的なテーマいついて体験的に考えるツアー、実験的なWS、様々な分野の専門家によるゲストレクチャーなどを通して未来のメディアリテラシーを学んでいきます。
            </Text>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              参加方法
            </Text>
            <Box>
              <Text>
                プログラム内容や日時などの詳細や参加者の募集は随時世界ずっとWONDER公式サイトやSNSよりお知らせします。
              </Text>
              <Text>ご興味がある方はフォローをお願いいたします</Text>
              <Text className="mt-5 font-semibold">
                instagram ,twitter :<a href="/">@sekaizutto</a>
              </Text>
            </Box>
          </Center>
        </Center>
        <Center
          flexDir={'column'}
          marginTop={16}
          fontSize={'xs'}
          mb={20}
          height={'screen'}
        >
          <Text fontSize={'xl'}>c. ヴィジョン</Text>
          <Text
            marginY={'5'}
            fontSize={'xs'}
            border={'1px'}
            paddingX={'2'}
            width="max"
          >
            概要
          </Text>
          <Center flexDir={'column'} maxW="80%">
            <Box>
              <Text>
                インディーズメディアMIXプロジェクト「体が半分機械になっても僕らしかできないことをやるよ。」
              </Text>
              <Text>(以下身体~プロジェクト)の制作・発信を行うプログラム。</Text>
              <Text>
                様々なメディアを横断しながら、社会と個人の境界に起きる摩擦(問題)に対するNEWメディシン(処方箋)の研究開発を行っています。
              </Text>
              <Text>
                このコースでは身体~プロジェクトにおける研究開発/制作を行うメンバーを募集しております。
              </Text>
            </Box>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              制作物
            </Text>
            <Text width={'60%'} textAlign={'center'}>
              ビデオゲーム、ドキュメンタリー、実験的なクイズ番組、ラジオ、街頭放送など
            </Text>
            <Text
              marginY={'5'}
              fontSize={'xs'}
              border={'1px'}
              paddingX={'2'}
              width="max"
            >
              参加方法
            </Text>
            <Box width={'60%'} textAlign={'center'}>
              <Text>メンバーは不定期で募集中。</Text>
              <Text>
                興味をお持ちの方はメールまたはSNSでご連絡くださいませ。
              </Text>
              <div>詳細をお伝えいたします。</div>
            </Box>
          </Center>
        </Center>
        <Box position={'relative'} zIndex={100}>
          <WaveMotMobile />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Introduction;
