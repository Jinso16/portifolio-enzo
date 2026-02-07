import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'
import VideoModal from '../../VideoModal/VideoModal'
import ImageWithModal from '../../ImageWithModal/ImageWithModal'
import { useState } from 'react'

export default function BadDreams() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false)

    return (
        <section className={styles.badDreams}>
            <PageHeader title='BAD DREAMS<br/>IN THE NIGHT' />

            <p>
                Bad Dreams In The Night é um curta metragem em estilo stop-motion animado inspirado na música "Wuthering Heights", da cantora Kate Bush.
            </p>

            <div className={styles.projectsWrapper}>
                <div className={styles.badDreamsWrapper} onClick={() => setIsVideoModalOpen(true)}>
                    <img src='/Audiovisual/BDITNimg.png' alt="Assista ao projeto Terra à Vista" />
                    <h2>ASSISTA À “BAD DREAMS IN THE NIGHT”</h2>
                    <div className={styles.backgroundGradient} />
                </div>
            </div>

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                src="https://drive.google.com/file/d/1OcmJaUza6NWcnAaBHkpBN3QUCCWSRjxS/preview"
                title="Bad Dreams In The Night - Curta Metragem"
            />

            <div className={styles.leftTextImage}>
                <p>
                    O tema da produção gira em torno do romance de Catherine e Heathcliff, abordado na música de Kate Bush e trama central do livro "O Morro dos Ventos Uivantes", ou "Wuthering Heights", da escritora Emily Brontë. O relacionamento entre as personagens é frustrado e a narrativa da música apresenta a relação como tumultuada e sombria. Os versos de Bush transitam entre diferentes sentimentos, sendo bastante carregados emocionalmente.
                </p>

                <div className={styles.image1}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad1.jpg" alt="" />
                </div>
            </div>

            <div className={styles.twoImages}>
                <div className={styles.image1}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad2.jpg" alt="" />
                </div>
                <div className={styles.image2}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad3.jpg" alt="" />
                </div>
            </div>

            <div className={styles.leftTextImage}>
                <div className={styles.image1}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad4.jpg" alt="" />
                </div>

                <p>
                    O projeto audiovisual desenvolvido baseia-se em uma abordagem lúdica da música de Bush. Utilizou-se como mandante o trecho “Bad Dreams In The Night”, que acabou por nomear o vídeo. O excerto abriu portas para uma interpretação embasada em um pesadelo de Cathy envolvendo o retorno de Heathcliff para sua vida (representado pela animação dos frames em três momentos diferentes).
                </p>
            </div>

            <p>
                A atmosfera é dividida em duas temáticas: uma mais sombria e com cores frias, para o quarto onde Catherine dorme, e outra mais viva e com cores vibrantes, para o seu pesadelo com uma igreja, remetendo ao fato de que a mulher viveria presa ao seu passado. A ideia central da produção alinha a narrativa da obra e o primeiro videoclipe oficial da música, em que Bush se encontra em um espaço vibrante e psicodélico (atmosfera utilizada no pesadelo de Catherine).
            </p>

            <div className={styles.threeImages}>
                <div className={styles.img1}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad5.jpg" alt="" />
                </div>
                <div className={styles.img2}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad7.jpg" alt="" />
                </div>
                <div className={styles.img3}>
                    <ImageWithModal src="/Audiovisual/BadDreams/bad6.jpg" alt="" />
                </div>
            </div>

            <p>
                Dirigir esse projeto foi incrivelmente desafiador, devido ao curto tempo disponível para contar uma história com tantas camadas. No final das contas, sinto que fizemos um bom trabalho em estabelecer uma atmosfera enigmática que conversasse com a ideia central da trilha sonora, um elemento essencial para o desenvolvimento da história.
            </p>

            <ImageWithModal className={styles.soloImage} src="/Audiovisual/BDITNimg.png" alt="" />
        </section>
    )
}