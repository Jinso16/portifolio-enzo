import styles from './styles.module.scss'

export default function Machines() {
    return (
        <section className={styles.machinesWrapper}>
            <header>
                <a href="/fotografia"></a>
                <h1>TRILOGIA MACHINES</h1>
            </header>

            <p>
                A trilogia “Machines” é um projeto satírico e inicialmente despretensioso. O conceito gira em torno da simulação de três capas de álbuns de música de uma banda fictícia. As obras são complementares e criticam de maneira subjetiva algum estereótipo do homem contemporâneo. O visual é inspirado na estética de bandas pop-punk dos anos 2000 e o projeto explora temas como nostalgia, religião e fama.
            </p>

            <div className={styles.machinesPages}>
                {
                    [...Array(3)].map((_, index: number) => {
                        return (
                            <img src={`/MachinesPages/page${index + 1}.svg`} alt="" />
                        )
                    })
                }
            </div>
        </section>
    )
}