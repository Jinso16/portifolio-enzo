import styles from './styles.module.scss'
import auroraImg from '../../assets/fotografia-aurora.png'
import orianImg from '../../assets/fotografia-orian.jpg'
import machinesImg from '../../assets/fotografia-machines.jpg'

import PageHeader from '../PageHeader/PageHeader'

import ImageWithModal from '../ImageWithModal/ImageWithModal'

export default function Fotografia() {
    return (
        <section className={styles.fotografiaWrapper}>
            <PageHeader title='FOTOGRAFIA' />

            <p>
                Entendo a fotografia como uma ferramenta para direção de arte e escrita visual, buscando sempre a subjetividade e a emoção em vez da mera documentação. Meu objetivo é transformar cada imagem em uma crônica intencional, definindo a cena, o humor e a história que deve ser contada. O resultado é a aplicação direta do storytelling em quadros estáticos.
            </p>

            <div className={styles.projectsWrapper}>
                <a href="/fotografia/aurora">
                    <div className={styles.auroraWrapper}>
                        <ImageWithModal src={auroraImg} alt="Projeto de Fotografia: Aurora" />
                        <h2>AURORA</h2>
                        <span>
                            Portfólio fotográfico que aborda o impacto da infância no desenvolvimento humano
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>

                <a href="/fotografia/orian">
                    <div className={styles.orianWrapper}>
                        <ImageWithModal src={orianImg} alt="Projeto de Fotografia: orian" />
                        <h2>PROJETO ORIAN</h2>
                        <span>
                            Cobertura fotojornalística que acompanha crianças jogando futebol em uma comunidade
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>

                {/* <a href="/fotografia/machines">
                    <div className={styles.machinesWrapper}>
                        <ImageWithModal src={machinesImg} alt="Projeto de Fotografia: Machines" />
                        <h2>TRILOGIA MACHINES</h2>
                        <span>
                            Projeto que simula capas de álbuns musicais que satirizam os pecados do homem contemporâneo
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a> */}
            </div>

        </section>
    )
}