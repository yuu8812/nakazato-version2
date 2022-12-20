import star from '../gifs/star.gif';
import new_program from '../gifs/new_program.mp4';
import kitarubeki from '../images/kitarubeki2.webp';
import { Link } from '@chakra-ui/react';

const KitaruImage = () => {
  return (
    <Link
      href="http://sekaizutto.com/%e6%9d%a5%e3%81%9f%e3%82%8b%e3%81%b9%e3%81%8d%e9%a2%a8%e6%99%af%e3%81%ae%e4%ba%88%e6%84%9f.html"
      target={'_blank'}
      m={0}
      p={0}
    >
      <video
        muted
        autoPlay={true}
        playsInline
        preload="auto"
        loop
        width={230}
        style={{
          transform: 'rotate(-20deg)',
          marginLeft: -10,
          paddingTop: 30,
        }}
      >
        <source src={new_program} type="video/mp4" />
      </video>
      <img
        src={kitarubeki}
        alt="icon"
        width={250}
        style={{
          position: 'relative',
          bottom: 15,
          left: 70,
        }}
      />
      <img
        src={star}
        alt={'icon2'}
        width={200}
        style={{
          position: 'relative',
          bottom: 80,
          left: 70,
          zIndex: -100,
          padding: -10,
        }}
      />
    </Link>
  );
};

export default KitaruImage;
