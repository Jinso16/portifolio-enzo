import styles from './styles.module.scss'
import circularImage1 from '../../../assets/circularImages/circularImage1.png'
import circularImage2 from '../../../assets/circularImages/circularImage2.png'
import circularImage3 from '../../../assets/circularImages/circularImage3.png'

export default function AboutMe() {

    return (
        <section className={styles.aboutMeWrapper} id='sobre'>
            <header>
                <span>02.</span>
                <h2>SOBRE MIM</h2>
            </header>

            <div className={styles.aboutMeContent}>
                <p>
                    ㅤㅤㅤㅤSou estudante de Comunicação Social (Publicidade e Propaganda) movido por uma afeição genuína por literatura, cinema e games, com o objetivo central de contar histórias que ressoam. Como entusiasta em Escrita Criativa e Direção de Arte, dedico-me a dar vida a narrativas visuais e textuais. Minha prática engloba desde a captura do momento (fotografia e produção audiovisual) até a construção de mundos (storytelling e direção de arte). Cada projeto é uma chance de usar o poder da arte para criar conexões profundas.
                </p>

                <div className={styles.imagesWrapper}>
                    <img src={circularImage1} alt="" />
                    <img src={circularImage2} alt="" />
                    <img src={circularImage3} alt="" />
                </div>
            </div>
        </section>
    )
}