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
                    <a target='_blank' href="">
                        <img src={"/cardsContact/cardCurriculo.svg"} alt="Email para Contato" />
                    </a>
                </div>

                <div data-mid>
                    <a target='_blank' href="https://instagram.com/enzoemmer">
                        <img src={"/cardsContact/cardInstagram.svg"} alt="Email para Contato" />
                    </a>
                    <a target='_blank' href="">
                        <img src={"/cardsContact/cardGithub.svg"} alt="Email para Contato" />
                    </a>
                </div>

                <div data-bottom>
                    <a target='_blank' href="https://www.linkedin.com/in/enzo-emmer-6aa958345/">
                        <img src={"/cardsContact/cardLinkedin.svg"} alt="Email para Contato" />
                    </a>
                </div>
            </section>
        </section>
    )
}