import styles from './styles.module.scss'
import mosaic1 from '../../../assets/MosaicImages/mosaic1.png'
import mosaic2 from '../../../assets/MosaicImages/mosaic2.png'
import mosaic3 from '../../../assets/MosaicImages/mosaic3.png'
import mosaic4 from '../../../assets/MosaicImages/mosaic4.png'
import mosaic5 from '../../../assets/MosaicImages/mosaic5.png'
import mosaic6 from '../../../assets/MosaicImages/mosaic6.png'
import mosaic7 from '../../../assets/MosaicImages/mosaic7.png'

import ImageWithModal from '../../ImageWithModal/ImageWithModal'

export default function ImageMosaic() {
    return (
        <section className={styles.imageMosaicWrapper}>
            <ImageWithModal src={mosaic1} alt="" />

            <div className={styles.mosaicBottom}>
                <div>
                    <ImageWithModal src={mosaic4} alt="" />
                </div>

                <div>
                    <ImageWithModal src={mosaic5} alt="" />
                </div>
            </div>

            <div className={styles.mosaicMid2}>
                <div>
                    <ImageWithModal src={mosaic6} alt="" />
                </div>

                <div>
                    <ImageWithModal src={mosaic7} alt="" />
                </div>
            </div>

            <div className={styles.mosaicMid}>
                <div>
                    <ImageWithModal src={mosaic2} alt="" />
                </div>

                <div>
                    <ImageWithModal src={mosaic3} alt="" />
                </div>
            </div>

        </section>
    )
}