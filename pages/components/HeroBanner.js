import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import BuyNowButton from './BuyNowButton';

const HeroBanner = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swfa-wide.jpg"
          className="hero-banner-image-filter"
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
          <div className="hero-banner-vertical-center">
            <h2>Star Wars: The Force Awakens</h2>
            <h4>Available to Rent or Buy Now</h4>
            <BuyNowButton />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swtlj-wide.jpg"
          className="hero-banner-image-filter"
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
          <div className="hero-banner-vertical-center">
            <h2>Star Wars: The Last Jedi</h2>
            <h4>Available to Rent or Buy Now</h4>
            <BuyNowButton />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="hero-banner-image">
        <Image
          src="/static/images/swtros-wide.webp"
          className="hero-banner-image-filter"
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
          <div className="hero-banner-vertical-center">
            <h2>Star Wars: The Rise of Skywalker</h2>
            <h4>Available to Rent or Buy Now</h4>
            <BuyNowButton />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroBanner;
