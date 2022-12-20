import { Box, Center } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { GetWindowSize } from './hooks/GetWindowSize';

const MainMobile = React.lazy(() => import('./pages/mobile/Main'));
const MainPc = React.lazy(() => import('./pages/pc/Main'));

function App() {
  const { width } = GetWindowSize();

  if (width) {
    return (
      <Box
        sx={{
          fontFamily: 'a-otf-gothic-mb101-pr6n,sans-serif',
          fontStyle: 'normal',
          fontWeight: '400px',
        }}
      >
        <Suspense
          fallback={<Center w={'100vw'} h={'100vh'} bg={'white'}></Center>}
        >
          {width > 700 ? <MainPc /> : <MainMobile />}
        </Suspense>
      </Box>
    );
  } else {
    return <Box bg={'white'}></Box>;
  }
}

export default App;
