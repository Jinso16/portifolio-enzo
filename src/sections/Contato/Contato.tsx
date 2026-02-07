import styles from './styles.module.scss'

export default function Contato() {
    return (
        <section className={styles.contato}>
            <header>
                <h1>CONTATO</h1>
            </header>

            <section data-contacts>
                <div data-top>
                    <a target='_blank' href="mailto:enzoemmer7@gmail.com">
                        <img src={"/cardsContact/cardEmail.svg"} alt="Email para Contato" />
                    </a>
                    <a target='_blank' href="/cardsContact/curriculo-enzo-sartor-oss-emmer.pdf">
                        <img src={"/cardsContact/cardCurriculo.svg"} alt="Curriculo" />
                    </a>
                </div>

                <div data-mid>
                    <a target='_blank' href="https://instagram.com/enzoemmer">
                        <img src={"/cardsContact/cardInstagram.svg"} alt="Instagram" />
                    </a>
                    <a target='_blank' href="https://github.com/enzoemmer">
                        <img src={"/cardsContact/cardGithub.svg"} alt="Github" />
                    </a>
                </div>

                <div data-bottom>
                    <a target='_blank' href="https://www.linkedin.com/in/enzo-emmer-6aa958345/">
                        <img src={"/cardsContact/cardLinkedin.svg"} alt="LinkedIn" />
                    </a>
                </div>
            </section>
        </section>
    )
}