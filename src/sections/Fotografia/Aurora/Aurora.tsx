import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'
import ImageWithModal from '../../ImageWithModal/ImageWithModal'

export default function Aurora() {
    return (
        <section className={styles.auroraWrapper}>
            <PageHeader title='AURORA' />

            <p>
                “Aurora” é um portfólio fotográfico baseado nas mazelas de uma infância problemática na vida de um indivíduo. Inspirado pelos personagens Sandy e Ptich Black, do filme “A Origem dos Guardiões”, o projeto apresenta uma coletânea de fotografias que contrastam duas perspectivas de vida distintas, contando uma história sobre mudança, destino e inocência.
            </p>

            <div className={styles.auroraPages}>
                {
                    [...Array(19)].map((_, index: number) => {
                        return (
                            <ImageWithModal src={`/AuroraPages/page${index + 1}.svg`} alt="" />
                        )
                    })
                }
            </div>
        </section>
    )
}