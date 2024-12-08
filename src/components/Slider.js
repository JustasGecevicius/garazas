import Slider from 'react-slick';
import { CarCard } from './CarCard.js';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const cars = [undefined, undefined, undefined, undefined];

  return (
    <div className='slider-container max-w-full'>
      <Slider {...settings}>
        {cars?.map((car) => (
          <CarCard car={car} />
        ))}
      </Slider>
    </div>
  );
}
