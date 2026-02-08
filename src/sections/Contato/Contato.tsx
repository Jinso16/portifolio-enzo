import styles from './styles.module.scss'
import useScreenResize from '../../utils/useScreenResize'

export default function Contato() {

    const { isMobile } = useScreenResize()

    return (
        <section className={styles.contato}>
            <header>
                <h1>CONTATO</h1>
            </header>

            <section data-contacts>

                {
                    isMobile ? (
                        <>
                            <div data-top>
                                <a target='_blank' rel="noreferrer" href="mailto:enzoemmer7@gmail.com">
                                    <img src={"/cardsContact/card-email-mobile.png"} alt="Email para Contato" />
                                </a>
                                <a target='_blank' rel="noreferrer" href="/cardsContact/curriculo-enzo-sartor-oss-emmer.pdf">
                                    <img src={"/cardsContact/card-curriculo-mobile.png"} alt="Curriculo" />
                                </a>
                            </div>

                            <div data-mid>
                                <a target='_blank' rel="noreferrer" href="https://instagram.com/enzoemmer">
                                    <img src={"/cardsContact/card-instagram-mobile.png"} alt="Instagram" />
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://github.com/enzoemmer">
                                    <img src={"/cardsContact/card-github-mobile.png"} alt="Github" />
                                </a>
                            </div>

                            <div data-bottom>
                                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/enzo-emmer-6aa958345/">
                                    <img src={"/cardsContact/card-linkedin-mobile.png"} alt="LinkedIn" />
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div data-top>
                                <a target='_blank' rel="noreferrer" href="mailto:enzoemmer7@gmail.com">
                                    <img src={"/cardsContact/cardEmail.svg"} alt="Email para Contato" />
                                </a>
                                <a target='_blank' rel="noreferrer" href="/cardsContact/curriculo-enzo-sartor-oss-emmer.pdf">
                                    <img src={"/cardsContact/cardCurriculo.svg"} alt="Curriculo" />
                                </a>
                            </div>

                            <div data-mid>
                                <a target='_blank' rel="noreferrer" href="https://instagram.com/enzoemmer">
                                    <img src={"/cardsContact/cardInstagram.svg"} alt="Instagram" />
                                </a>
                                <a target='_blank' rel="noreferrer" href="https://github.com/enzoemmer">
                                    <img src={"/cardsContact/cardGithub.svg"} alt="Github" />
                                </a>
                            </div>

                            <div data-bottom>
                                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/enzo-emmer-6aa958345/">
                                    <img src={"/cardsContact/cardLinkedin.svg"} alt="LinkedIn" />
                                </a>
                            </div>
                        </>
                    )
                }
            </section>
        </section>
    )
}