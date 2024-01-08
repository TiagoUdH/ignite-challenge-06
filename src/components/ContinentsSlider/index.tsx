import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderItem } from './SliderItem';
import styles from './styles.module.css';

type Continent = {
  id: number,
  name: string,
  shortDescription: string,
  imageHome: string,
}

interface ContinentsSliderProps {
  continents: Continent[]
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3300,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.swiper}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <SliderItem continent={continent} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
