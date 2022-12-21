import { Box, Center, Flex, Text } from '@chakra-ui/react';

const Introduction = () => {
  return (
    <Box borderTop={'8px'} bg={'white'} id="introduction" position={'relative'}>
      <Box overflow={'hidden'} position={'sticky'} top={20}>
        <Text
          fontSize={'3xl'}
          sx={{
            writingMode: 'vertical-rl',
            WebkitTextStroke: '1.6px',
            letterSpacing: '3px',
          }}
          w={'100vw'}
          pr={'10%'}
          pt={28}
        >
          コース内容紹介
        </Text>
      </Box>
      <Center flexDir="column">
        <Box paddingBottom={20} maxW={'1000px'} flexDir={'column'} ml={-20}>
          <Box mx={5}>
            <Box ml={40}>
              <Box>
                <Text
                  fontSize={'3xl'}
                  mt={-60}
                  sx={{
                    WebkitTextStroke: '1.6px',
                    letterSpacing: '3px',
                  }}
                >
                  a.ナラティブ
                </Text>
                <Text
                  fontSize={'md'}
                  sx={{
                    WebkitTextStroke: '1.0px',
                    letterSpacing: '3px',
                  }}
                >
                  プライマリーコース/アドバンスドコース
                </Text>
              </Box>
              <Center>
                <Text
                  ml={-32}
                  mt={10}
                  mb={5}
                  fontSize={'xl'}
                  paddingX={3}
                  sx={{ WebkitTextStroke: '0.5px', border: '1.3px solid' }}
                >
                  概要
                </Text>
              </Center>
              <Box>
                <Box
                  fontSize="sm"
                  sx={{ WebkitTextStroke: '0.6px', letterSpacing: '2px' }}
                >
                  <Text>
                    誰のためでもない、あなたが作る、あなたの物語(ナラティブ)。
                    <br />
                    未だ語られていない個々の物語を立ち上げる技術を学びます。
                  </Text>
                  <Text pt={2}>
                    プライマリーコースでは、参加者それぞれの興味や好奇心、問いを掘り下げながら、
                    <br />
                    アイディアを生み出すためのリサーチ手法を学び、物語のかけらを集めた企画書を制作していきます。
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
                </Box>
              </Box>
              <Box>
                <Box>
                  <Text
                    mt={20}
                    sx={{ WebkitTextStroke: '1.0px', letterSpacing: '2px' }}
                    fontSize={'xl'}
                    ml={'10'}
                  >
                    1, プライマリーコース
                  </Text>
                  <Box>
                    <Center
                      width={'600px'}
                      justifyContent="space-between"
                      alignItems={'flex-start'}
                      mt={3}
                      sx={{ WebkitTextStroke: '0.6px' }}
                    >
                      <Center flexDir={'column'} pl={12}>
                        <Text
                          my={5}
                          fontSize={'xl'}
                          border={'1px'}
                          paddingX={4}
                          sx={{
                            WebkitTextStroke: '0.8px',
                            border: '1.3px solid',
                          }}
                        >
                          制作物
                        </Text>
                        <Text>企画、アイディア</Text>
                        <Text>(スクラップブック、ZINEなど)</Text>
                      </Center>
                      <Center flexDir={'column'}>
                        <Text
                          my={5}
                          fontSize={'xl'}
                          border={'1px'}
                          paddingX={'4'}
                          sx={{
                            WebkitTextStroke: '0.8px',
                            border: '1.3px solid',
                          }}
                        >
                          対象者
                        </Text>
                        <Text fontSize={'md'}>制作初心者の方</Text>
                        <Text fontSize={'md'}>アイディアづくりや企画作り</Text>
                        <Text fontSize={'md'}>を基礎から学びたい方</Text>
                      </Center>
                    </Center>
                  </Box>
                  <Box>
                    <Text
                      mt={20}
                      sx={{ WebkitTextStroke: '1.0px', letterSpacing: '2px' }}
                      fontSize={'xl'}
                      ml={'10'}
                    >
                      2, アドバンスドコース
                    </Text>
                    <Box>
                      <Center
                        width={'600px'}
                        justifyContent="space-between"
                        alignItems={'start'}
                        mt={3}
                        sx={{ WebkitTextStroke: '0.6px' }}
                        pl={20}
                      >
                        <Center flexDir={'column'}>
                          <Text
                            my={5}
                            fontSize={'xl'}
                            border={'1px'}
                            paddingX={'4'}
                            sx={{
                              WebkitTextStroke: '0.8px',
                              border: '1.3px solid',
                            }}
                          >
                            制作物
                          </Text>
                          <Text>作品、ポートフォリオ</Text>
                        </Center>
                        <Center flexDir={'column'} mr={2}>
                          <Text
                            my={5}
                            fontSize={'xl'}
                            border={'1px'}
                            paddingX={'4'}
                            sx={{ WebkitTextStroke: '0.8px' }}
                          >
                            対象者
                          </Text>
                          <Text fontSize={'md'}>制作経験者の方</Text>
                          <Text fontSize={'md'}>アイディアや企画はあるが</Text>
                          <Text fontSize={'md'}>カタチにできていない方</Text>
                        </Center>
                      </Center>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Center
              mt={20}
              fontSize={'sm'}
              justifyContent="space-around"
              sx={{ WebkitTextStroke: '0.6px' }}
            >
              <Box w={'25vw'}>
                <Box h={40}>
                  <Text
                    marginY={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.5px' }}
                  >
                    プログラム
                  </Text>
                  <Text>レクチャー・WS(ワークショップ)</Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊基本的には対話形式のレクチャーを想定しています
                  </Text>
                </Box>
                <Box h={40}>
                  <Text
                    marginY={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    スケジュール
                  </Text>
                  <Text>各回90~120分 全12回</Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊授業日時は参加者と相談して決めていきます
                  </Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊隔週ごとに一回ぐらいの頻度を想定しています
                  </Text>
                </Box>
                <Box h={40}>
                  <Text
                    marginY={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    料金
                  </Text>
                  <Text>各コース</Text>
                  <Text>100,000円(税抜)</Text>
                  <Text>＊内訳 入学金10,000円 授業料90,000円</Text>
                </Box>
                <Box h={40}>
                  <Text
                    marginY={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    支払い方法
                  </Text>
                  <Text>申し込みフォーム記入後、</Text>
                  <Text>メールにてお支払い方法詳細をお知らせいたします</Text>
                  <Text>お支払い回数は 1, 2, 4回から選択可能です</Text>
                </Box>
              </Box>
              <Box w={'25vw'}>
                <Box h={'40'}>
                  <Text
                    marginY={3}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    場所
                  </Text>
                  <Text marginBottom={1} fontSize={'md'}>
                    [オフライン]
                  </Text>
                  <Text>渋谷 PARCO 9階 GAKU / FabCafe MTRL ほか</Text>
                  <Text
                    whiteSpace={'nowrap'}
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊プログラム内容に応じて決めていきます
                  </Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊通うことが難しい場合はオフラインでの受講も可能です
                  </Text>
                </Box>
                <Box h={40} pt={1}>
                  <Text marginTop={5} marginBottom={1} fontSize={'md'}>
                    [オンライン]
                  </Text>
                  <Text>ZOOM など</Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊フィジカルでの対応が必要な場合は
                  </Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    それぞれの制作内容や状況に応じて個別に対応していきます
                  </Text>
                </Box>
                <Box h={40}>
                  <Text
                    marginTop={8}
                    marginBottom={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    定員
                  </Text>
                  <Text>アドバンスドコース:6名</Text>
                  <Text>プライマリーコース:6名</Text>
                  <Text
                    sx={{ WebkitTextStroke: '0.5px' }}
                    fontSize={'sm'}
                    pt={1}
                  >
                    ＊参加者多数の場合は締め切らせていただきます
                  </Text>
                </Box>
                <Box h={40} mt={2}>
                  <Text
                    marginY={'5'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                    fontSize={'xl'}
                    sx={{ WebkitTextStroke: '0.7px' }}
                  >
                    用意するもの
                  </Text>
                  <Text>個々の制作内容に応じて決めていきます</Text>
                  <Text>準備が必要な場合は各回授業前にお伝えします</Text>
                </Box>
              </Box>
            </Center>
            <Flex
              mt={40}
              fontSize={'14px'}
              position={'relative'}
              justifyContent="start"
              top={0}
              sx={{
                WebkitTextStroke: '0.6px',
                // letterSpacing: '3px',
                lineHeight: '30px',
              }}
            >
              <Flex
                width={'45vw'}
                px={10}
                flexDir="column"
                borderRight={'2px'}
                position="relative"
                top={0}
                alignItems={'center'}
              >
                <Text fontSize={'3xl'} sx={{ WebkitTextStroke: '1.3px' }}>
                  b. リサーチ
                </Text>
                <Text
                  marginY={'10'}
                  fontSize={'xl'}
                  border={'1px'}
                  paddingX={3}
                  width="max"
                >
                  概要
                </Text>
                <div>
                  シーズンごとに設定した同時代的なテーマいついて体験的に考えるツアー、実験的なWS、様々な分野の専門家によるゲストレクチャーなどを通して未来のメディアリテラシーを学んでいきます。
                </div>
                <Text
                  marginY={'10'}
                  fontSize={'xl'}
                  border={'1px'}
                  paddingX={3}
                  width="max"
                >
                  参加方法
                </Text>
                <div>
                  <div>
                    プログラム内容や日時などの詳細や参加者の募集は随時世界ずっとWONDER公式サイトやSNSよりお知らせします。
                  </div>
                  <div>ご興味がある方はフォローをお願いいたします</div>
                  <Box pt={10}>
                    instagram :
                    <Box
                      href="https://www.instagram.com/sekaizutto/"
                      target="blank"
                      as={'a'}
                      pl={2}
                    >
                      @sekaizutto
                    </Box>
                  </Box>
                  <Box pt={2}>
                    twitter :
                    <Box
                      href="https://twitter.com/sekaizutto"
                      target="blank"
                      as={'a'}
                      pl={2}
                    >
                      @sekaizutto
                    </Box>
                  </Box>
                </div>
              </Flex>
              <Center w={'45vw'} px={10} flexDir="column">
                <Text fontSize={'3xl'} sx={{ WebkitTextStroke: '1.3px' }}>
                  c. ヴィジョン
                </Text>
                <Text
                  marginY={'10'}
                  fontSize={'xl'}
                  border={'1px'}
                  paddingX={3}
                  width="max"
                >
                  概要
                </Text>
                <Center flexDir={'column'}>
                  <div>
                    <div>
                      インディーズメディアMIXプロジェクト「体が半分機械になっても僕らしかできないことをやるよ。」
                    </div>
                    <div>
                      (以下身体~プロジェクト)の制作・発信を行うプログラム。
                    </div>
                    <div>
                      様々なメディアを横断しながら、社会と個人の境界に起きる摩擦(問題)に対するNEWメディシン(処方箋)の研究開発を行っています。
                    </div>
                    <div className="div">
                      このコースでは身体~プロジェクトにおける研究開発/制作を行うメンバーを募集しております。
                    </div>
                  </div>
                  <Text
                    marginY={'10'}
                    fontSize={'xl'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                  >
                    制作物
                  </Text>
                  <Text textAlign={'center'}>
                    ビデオゲーム、ドキュメンタリー、
                    <br />
                    実験的なクイズ番組、ラジオ、街頭放送など
                  </Text>
                  <Text
                    marginY={'10'}
                    fontSize={'xl'}
                    border={'1px'}
                    paddingX={3}
                    width="max"
                  >
                    参加方法
                  </Text>
                  <Box textAlign={'center'}>
                    <Text>メンバーは不定期で募集中。</Text>
                    <Text>
                      興味をお持ちの方はメール
                      <br />
                      またはSNSでご連絡くださいませ。
                    </Text>
                    <div>詳細をお伝えいたします。</div>
                  </Box>
                </Center>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Introduction;
