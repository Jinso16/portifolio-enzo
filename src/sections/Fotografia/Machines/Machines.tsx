import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'

import ImageWithModal from '../../ImageWithModal/ImageWithModal'

export default function Machines() {
    return (
        <section className={styles.machinesWrapper}>
            <PageHeader title='TRILOGIA MACHINES' />

            <p>
                A trilogia “Machines” é um projeto satírico e inicialmente despretensioso. O conceito gira em torno da simulação de três capas de álbuns de música de uma banda fictícia. As obras são complementares e criticam de maneira subjetiva algum estereótipo do homem contemporâneo. O visual é inspirado na estética de bandas pop-punk dos anos 2000 e o projeto explora temas como nostalgia, religião e fama.
            </p>

            <div className={styles.machinesPages}>
                {
                    [...Array(3)].map((_, index: number) => {
                        return (
                            <ImageWithModal src={`/MachinesPages/page${index + 1}.svg`} alt="" />
                        )
                    })
                }
            </div>
        </section>
    )
}