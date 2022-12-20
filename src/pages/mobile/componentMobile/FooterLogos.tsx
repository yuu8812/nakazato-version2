import logo from '../../../svgs/logo3.webp';
import logo2 from '../../../images/logo.webp';
import logo3 from '../../../images/universe.webp';
import logo4 from '../../../images/dracle.webp';
import { Center } from '@chakra-ui/react';

const FooterLogos = () => {
  return (
    <Center
      flexDir={'column'}
      h={'100vh'}
      justifyContent={'space-around'}
      bg={'white'}
    >
      <a href="/">
        <img loading="lazy" className="" src={logo} alt="logo" width={350} />
      </a>
      <a href="https://www.yumegiwa.co.jp/" target="blank">
        <img
          loading="lazy"
          className="pt-20"
          src={logo2}
          alt="logo"
          width={300}
        />
      </a>
      <img
        loading="lazy"
        className="pt-20"
        src={logo3}
        alt="logo"
        width={150}
      />
      <a href="https://www.dracre.co.jp/" target={'blank'}>
        <img
          loading="lazy"
          className="pt-20"
          src={logo4}
          alt="logo"
          width={250}
        />
      </a>
    </Center>
  );
};

export default FooterLogos;
