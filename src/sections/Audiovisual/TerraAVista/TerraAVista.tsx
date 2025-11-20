import styles from './styles.module.scss'

// import React, { useState } from 'react'
// import ReactPlayer from 'react-player'

export default function TerraAVista() {

    //const [isPlaying, setIsPlaying] = useState<boolean>(false)

    return (
        <section className={styles.terraVista}>
            <header>
                <a href="/audiovisual"></a>
                <h1>TERRA À VISTA</h1>
            </header>

            <p>
                “Terra à Vista” é um curta metragem que aborda uma relação problemática entre dois irmãos que, em meio a problemas familiares, precisam se agarrar um ao outro e às memórias de um passado que eles gostariam que tivesse durado mais tempo.
            </p>

            <div className={styles.projectsWrapper}>
                <a href="">
                    <div className={styles.terraVistaWrapper}>
                        <img src='/Audiovisual/terraVistaImg.png' alt="Assista ao projeto Terra à Vista" />
                        <h2>ASSISTA À "TERRA À VISTA"</h2>
                        <div className={styles.backgroundGradient} />
                    </div>
                </a>
            </div>

            {/* <div onClick={() => setIsPlaying(!isPlaying)}>
                <ReactPlayer loop={true} playing={isPlaying} style={{aspectRatio: "1/1", width: "100%", height:"unset"}} src={"https://player.vimeo.com/video/1135831273?background=1"}/>
            </div> */}
            
            <p>
                Este foi o projeto de conclusão do Itinerário Formativo no qual me especializei durante o Ensino Médio, Cinema e Produção Audiovisual, e sua materialização me proporcionou uma sensação de dever cumprido. A história acompanha Arthur e Miguel, dois irmãos com personalidades opostas. Miguel é uma criança sonhadora que percebe o mundo como um livro em branco, enquanto Arthur é um adolescente forçado a amadurecer precocemente, mantendo uma relação complicada com o caçula. Essa dinâmica é testada quando a atmosfera familiar se deteriora com a separação dos pais, e os irmãos precisam encontrar um porto seguro não em casa, mas um no outro. O curta conta uma história profunda sobre amor, redenção e memória.
Minha dedicação a este projeto foi total, não apenas no roteiro e na atuação, mas principalmente na arquitetura detalhada da narrativa, através de uma direção minuciosa que trascendeu aos limites orçamentários e estruturais.
            </p>

        </section>
    )
}