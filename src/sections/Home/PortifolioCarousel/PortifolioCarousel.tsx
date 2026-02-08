import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import fotografiaBanner from '../../../assets/fotografia-banner.png'
import audiovisualBanner from '../../../assets/audiovisual-banner.png'
import videogameBanner from '../../../assets/videogame-banner.jpg'
import teatroBanner from '../../../assets/teatro-banner.jpg'

import useScreenResize from '../../../utils/useScreenResize';
import { useMemo } from 'react';

export default function PortifolioCarousel() {

    const { isMobile } = useScreenResize()

    const slidesPerView = useMemo(() => (
        isMobile ? (1.5) : 'auto'
    ), [isMobile])

    console.log(slidesPerView)

    return (
        <section className={styles.portifolioCarouselWrapper} id='portifolio'>
            <header>
                <span>01.</span>
                <h2>PORTIFÓLIO</h2>
            </header>

            <div className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={16}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}

                    className={styles.swiper}
                >
                    <SwiperSlide
                        className={styles.swiperCard}
                        data-slide="0"
                    >
                        <a href='/fotografia'>
                            <img src={fotografiaBanner} alt="Projetos de Fotografia" />
                            <h3>FOTOGRAFIA</h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide
                        className={styles.swiperCard}
                        data-slide="1"
                    >
                        <a href='/audiovisual'>
                            <img src={audiovisualBanner} alt="Projetos Audiovisuais" />
                            <h3>AUDIOVISUAL</h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide
                        className={styles.swiperCard}
                        data-slide="2"
                    >
                        <a href='/videogames/the-place-i-feel-safe'>
                            <img src={videogameBanner} alt="Projetos de Videogames" />
                            <h3>VIDEOGAMES</h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide
                        className={styles.swiperCard}
                        data-slide="3"
                    >
                        <a href='/teatro'>
                            <img src={teatroBanner} alt="Projetos Teatrais" />
                            <h3>TEATRO</h3>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}