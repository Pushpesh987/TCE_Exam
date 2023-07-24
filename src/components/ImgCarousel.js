import Carousel from 'react-bootstrap/Carousel';
import one from '../image/1.jpg';
import two from '../image/2.jpg';
import three from '../image/3.jpg';
import four from '../image/4.jpg';

function ImgCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={1550} height={610} src={one} text="First slide" alt ="img not found" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={1550} height={610} src={two} text="Second slide" alt ="img not found" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1550} height={610} src={three} text="Third slide" alt ="img not found" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1550} height={610} src={four} text="Fourth slide" alt ="img not found" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;