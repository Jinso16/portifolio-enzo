import styles from './styles.module.scss'
import auroraImg from '../../assets/fotografia-aurora.png'
import machinesImg from '../../assets/fotografia-machines.jpg'

export default function Fotografia() {
    return (
        <section className={styles.fotografiaWrapper}>
            <header>
                <a href="/"></a>
                <h1>FOTOGRAFIA</h1>
            </header>

            <p>
                Entendo a fotografia como uma ferramenta para direção de arte e escrita visual, buscando sempre a subjetividade e a emoção em vez da mera documentação. Meu objetivo é transformar cada imagem em uma crônica intencional, definindo a cena, o humor e a história que deve ser contada. O resultado é a aplicação direta do storytelling em quadros estáticos.
            </p>
            
            <div className={styles.projectsWrapper}>
                <a href="/fotografia/aurora">
                    <div className={styles.auroraWrapper}>
                        <img src={auroraImg} alt="Projeto de Fotografia: Aurora" />
                        <h2>AURORA</h2>
                        <span>
                            Portfólio fotográfico que aborda o impacto da infância no desenvolvimento humano
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>

                <a href="/fotografia/machines">
                    <div className={styles.machinesWrapper}>
                        <img src={machinesImg} alt="Projeto de Fotografia: Machines" />
                        <h2>TRILOGIA MACHINES</h2>
                        <span>
                            Projeto que simula capas de álbuns musicais que satirizam os pecados do homem contemporâneo
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>
            </div>

        </section>
    )
}