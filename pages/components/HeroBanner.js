import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swfa-wide.jpg"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        ></Image>
        <Carousel.Caption>
          <h2>Star Wars: The Force Awakens</h2>
          <p>Available to Rent or Buy Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swtlj-wide.jpg"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        ></Image>
        <Carousel.Caption>
          <h2>Star Wars: The Last Jedi</h2>
          <p>Available to Rent or Buy Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swtros-wide.webp"
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        ></Image>
        <Carousel.Caption>
          <h2>Star Wars: The Rise of Skywalker</h2>
          <p>Available to Rent or Buy Now</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroBanner;
