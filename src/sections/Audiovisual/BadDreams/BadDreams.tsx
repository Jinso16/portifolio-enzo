import styles from './styles.module.scss'

import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export default function BadDreams() {

    //const [isPlaying, setIsPlaying] = useState<boolean>(false)

    return (
        <section className={styles.badDreams}>
            <header>
                <a href="/audiovisual"></a>
                <h1>BAD DREAMS<br/>IN THE NIGHT</h1>
            </header>

            <p>
                Bad Dreams In The Night é um curta metragem em estilo stop-motion animado inspirado na música "Wuthering Heights", da cantora Kate Bush.
            </p>

            <div className={styles.projectsWrapper}>
                <a href="">
                    <div className={styles.badDreamsWrapper}>
                        <img src='/Audiovisual/BDITNimg.png' alt="Assista ao projeto Terra à Vista" />
                        <h2>ASSISTA À “BAD DREAMS IN THE NIGHT”</h2>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>
            </div>

            <p>
                O tema da produção gira em torno do romance de Catherine e Heathcliff, abordado na música de Kate Bush e trama central do livro "O Morro dos Ventos Uivantes", ou "Wuthering Heights", da escritora Emily Brontë. O relacionamento entre as personagens é frustrado e a narrativa da música apresenta a relação como tumultuada e sombria. Os versos de Bush transitam entre diferentes sentimentos, sendo bastante carregados emocionalmente.
O projeto audiovisual desenvolvido baseia-se em uma abordagem lúdica da música de Bush. Utilizou-se como mandante o trecho “Bad Dreams In The Night”, que acabou por nomear o vídeo. O excerto abriu portas para uma interpretação embasada em um pesadelo de Cathy envolvendo o retorno de Heathcliff para sua vida (representado pela animação dos frames em três momentos diferentes). A atmosfera é dividida em duas temáticas: uma mais sombria e com cores frias, para o quarto onde Catherine dorme, e outra mais viva e com cores vibrantes, para o seu pesadelo com uma igreja, remetendo ao fato de que a mulher viveria presa ao seu passado. A ideia central da produção alinha a narrativa da obra e o primeiro videoclipe oficial da música, em que Bush se encontra em um espaço vibrante e psicodélico (atmosfera utilizada no pesadelo de Catherine). 
Dirigir esse projeto foi incrivelmente desafiador, devido ao curto tempo disponível para contar uma história com tantas camadas. No final das contas, sinto que fizemos um bom trabalho em estabelecer uma atmosfera enigmática que conversasse com a ideia central da trilha sonora, um elemento essencial para o desenvolvimento da história.
            </p>

        </section>
    )
}