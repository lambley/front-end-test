import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  <Carousel fade>
    <Carousel.Item>
      <Image
        src="/static/images/swfa.jpg"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      ></Image>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>;
};

export default HeroBanner;
