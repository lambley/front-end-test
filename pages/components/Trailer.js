import Image from 'next/image';
import Button from 'react-bootstrap/Button';

const Trailer = () => {
  return (
    <div className="d-flex">
      <div className="w-50 next-image-fix">
        <Image
          src="/static/images/SWCharacterPosters-Rey1.webp"
          width="1000"
          height="700"
          objectFit="cover"
          className="fluid"
          style={{
            objectPosition: 'top',
            height: 'auto',
          }}
        ></Image>
      </div>
      <div className="d-flex row w-50 align-content-center p-5 mx-5">
        <h2>New Star Wars Trailer</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          hic, illo eum consequuntur recusandae sapiente ab assumenda, dolorum
          eius cum earum expedita! Quisquam placeat fugit voluptatem itaque
          officia voluptas modi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tenetur deleniti atque molestias voluptatum.
          Exercitationem quod sit at, a praesentium id neque molestiae unde quis
          quae nihil, itaque non cupiditate consectetur.
        </p>
        <Button variant="dark" className="button-rounded button-padding w-auto">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Trailer;
