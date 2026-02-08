import styles from './styles.module.scss'
import mainBanner from '../../assets/mainBanner.png'
import PortifolioCarousel from './PortifolioCarousel/PortifolioCarousel'
import ImageMosaic from './ImageMosaic/ImageMosaic'
import AboutMe from './AboutMe/AboutMe'
import SoftSkills from './SoftSkills/SoftSkills'
import useScreenResize from '../../utils/useScreenResize'

export default function Home() {

    const { isMobile } = useScreenResize()

    return (
        <section className={styles.homeWrapper} id='inicio'>
            <div className={styles.mainBannerContainer}>
                <img src={mainBanner} alt="Banner Principal" />
                <div className={styles.imageShadow}/>

                <div className={styles.textContainer}>
                    <h1>Olá, me chamo <span>Enzo.</span></h1>
                    <p>Sou um Diretor de Arte, {isMobile&&<br/>}atualmente estudante de Comunicação.</p>
                </div>
            </div>

            <PortifolioCarousel />
            <ImageMosaic />
            <AboutMe />
            <SoftSkills />
        </section>
    )
}