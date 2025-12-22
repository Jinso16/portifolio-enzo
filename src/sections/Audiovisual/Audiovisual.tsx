import styles from './styles.module.scss'
import PageHeader from '../PageHeader/PageHeader'

export default function Audiovisual() {
    return (
        <section className={styles.audiovisual}>
            <PageHeader title='AUDIOVISUAL' />

            <p>
                Em projetos audiovisuais, sempre enxerguei o alicerce da narrativa como a prioridade. Acredito firmemente que um <i>storytelling</i> coeso e bem construído é o recurso mais valioso da produção. Independentemente das limitações técnicas ou orçamentárias, é a força do conceito e a excelência da história que sustentam o produto final e definem seu impacto.
            </p>

            <div className={styles.projectsWrapper}>
                <a href="/audiovisual/terra-a-vista">
                    <div className={styles.terraVistaWrapper}>
                        <img src='/Audiovisual/terraVistaImg.png' alt="Projeto Audiovisual: Terra à Vista" />
                        <h2>TERRA À VISTA</h2>
                        <span>
                            Curta-metragem sobre as dinâmicas familiares e uma relação complexa entre dois irmãos em estágios diferentes da vida
                        </span>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>

                <a href="/audiovisual/bad-dreams-in-the-night">
                    <div className={styles.badDreamsWrapper}>
                        <img src='/Audiovisual/BDITNimg.png' alt="Projeto Audiovisual: Bad Dreams In The Night" />
                        <h2>BAD DREAMS IN THE NIGHT</h2>
                        <span>
                            Mini curta-metragem melancólico e enigmático baseado na letra de “Wuthering Heights”, de Kate Bush
                        </span>
                    </div>
                </a>
            </div>
        </section>
    )
}