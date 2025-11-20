import styles from './styles.module.scss'

export default function Aurora() {
    return (
        <section className={styles.auroraWrapper}>
            <header>
                <a href="/fotografia"></a>
                <h1>AURORA</h1>
            </header>

            <p>
                “Aurora” é um portfólio fotográfico baseado nas mazelas de uma infância problemática na vida de um indivíduo. Inspirado pelos personagens Sandy e Ptich Black, do filme “A Origem dos Guardiões”, o projeto apresenta uma coletânea de fotografias que contrastam duas perspectivas de vida distintas, contando uma história sobre mudança, destino e inocência.
            </p>

            <div className={styles.auroraPages}>
                {
                    [...Array(19)].map((_, index: number) => {
                        return (
                            <img src={`/AuroraPages/page${index + 1}.svg`} alt="" />
                        )
                    })
                }
            </div>
        </section>
    )
}