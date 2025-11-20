import styles from './styles.module.scss'
import mosaic1 from '../../../assets/MosaicImages/mosaic1.png'
import mosaic2 from '../../../assets/MosaicImages/mosaic2.png'
import mosaic3 from '../../../assets/MosaicImages/mosaic3.png'
import mosaic4 from '../../../assets/MosaicImages/mosaic4.png'
import mosaic5 from '../../../assets/MosaicImages/mosaic5.png'

export default function ImageMosaic() {
    return (
        <section className={styles.imageMosaicWrapper}>
            <img src={mosaic1} alt="" />

            <div className={styles.mosaicMid}>
                <div>
                    <img src={mosaic2} alt="" />
                </div>

                <div>
                    <img src={mosaic3} alt="" />
                </div>
            </div>

            <div className={styles.mosaicBottom}>
                <div>
                    <img src={mosaic4} alt="" />
                </div>

                <div>
                    <img src={mosaic5} alt="" />
                </div>
            </div>
        </section>
    )
}