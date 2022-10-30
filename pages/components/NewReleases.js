import images from '../../public/static/images/dvd-covers';

import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const NewReleases = () => {
  const renderImages = images.map((img, index) => (
    <Card>
      <Image
        src={img}
        key={index}
        width=""
        height=""
        style={{ width: '100%', height: 'auto' }}
      ></Image>
    </Card>
  ));

  return (
    <div className="newreleases-container">
      <div className="newreleases-top-row">
        <h2>New Releases This Month</h2>
        <button className="button-rounded button-padding">See all</button>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="justify-content-center align-items-center"
              gap={3}
            >
              {renderImages.slice(0, 3)}
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="justify-content-center align-items-center"
              gap={3}
            >
              {renderImages.slice(3, 6)}
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              {renderImages.slice(6, 9)}
            </Stack>
          </Carousel.Item>
          <Carousel.Item>
            <Stack
              direction="horizontal"
              className="justify-content-center align-items-center"
              gap={3}
            >
              {renderImages.slice(9, 12)}
            </Stack>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default NewReleases;
