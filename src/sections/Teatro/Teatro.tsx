import styles from './styles.module.scss'

export default function Teatro() {

    return (
        <section className={styles.teatro}>
            <header>
                <a href="/"></a>
                <h1>TEATRO</h1>
            </header>

            <p>
                O teatro não é apenas uma paixão que me acompanha desde os 12 anos; foi, sobretudo, o meu laboratório prático de storytelling e Direção de Arte. Se os jogos, o cinema ou a literatura exigem histórias previamente planejadas, o palco exige que elas sejam construídas em tempo real, com a complexidade do ao vivo.
            </p>

            <div className={styles.twoImages}>
                <img src="/Teatro/teatro1.png" alt="" />
                <img src="/Teatro/teatro2.png" alt="" />
            </div>

            <div className={styles.leftTextImage}>
                <p>
                    Minha experiência mais formativa foi como Diretor Criativo no CETEC Festival, maior evento de teatro do Rio Grande do Sul, onde, durante três anos consecutivos do Ensino Médio, participei da escrita de roteiro, atuação e direção artística dos espetáculos da turma. Essa imersão me ensinou a essência de transformar um conceito em uma experiência coesa: a fundo na escrita, construindo personagens e conflitos, e na Direção de Arte, gerenciando a performance visual.
                </p>

                <img src="/Teatro/teatro3.png" alt="" />
            </div>

            <div className={styles.rightTextImage}>
                <img src="/Teatro/teatro4.png" alt="" />

                <p>
                    Em 2022, a peça “Reflexos de uma Nação Gigante pela Própria Natureza” se adequava à temática do centenário da Semana de Arte Moderna no Brasil, tomando como ponto de partida a interpretação e conexão de três obras emblemáticas do movimento modernista no Brasil. A narrativa abordava temas como êxodo rural, direitos trabalhistas e, majoritariamente, o impacto da arte progressista em uma sociedade parcialmente preparada para recebê-la.
                </p>
            </div>

            <div className={styles.twoImages}>
                <img src="/Teatro/teatro5.png" alt="" />
                <img src="/Teatro/teatro6.png" alt="" />
            </div>

            <p>
                O tema do Festival em 2023 foi “Frutos da Revolução”, contemplando momentos históricos que mudaram rumos e definem o presente. A peça “Como nossos pais” retrata a realidade de uma família destruída pela rigidez perversa da Ditadura Militar brasileira, ocorrida de 1964 a 1985. Na história, a memória apagada de um jornalista desaparecido é revivida anos depois por sua filha, que decide buscar uma cura para as feridas da mãe, cuja mente vive até hoje amaldiçoada pelo conservadorismo ditatorial que a tirou de seu amado.
            </p>

            <div className={styles.threeImages}>
                <img src="/Teatro/teatro7.png" alt="" />
                <img src="/Teatro/teatro8.png" alt="" />
                <img src="/Teatro/teatro9.png" alt="" />
            </div>

            <div className={styles.leftTextImage}>
                <p>
                    Em 2024, foram contemplados no CETEC Festival os 150 anos da imigração italiana no Brasil. Tendo como inspiração os Western Spaghetti e as emblemáticas máfias italianas, me despedi do projeto com “Até que a morte nos separe”, um espetáculo dramático sobre o significado de família. Em meio a uma eleição municipal, três irmãos com objetivos conflitantes são postos à prova em uma atmosfera de corrupção, paixão e morte. Sem escutar a música que toca em seus corações, eles se vêem fadados a um destino repulsivo.
                </p>

                <img src="/Teatro/teatro10.png" alt="" />
            </div>

            <div className={styles.twoImagesReverse}>
                <img src="/Teatro/teatro11.png" alt="" />
                <img src="/Teatro/teatro12.png" alt="" />
            </div>

            <div className={styles.lastMessage}>
                <img src="/Teatro/teatro13.png" alt="" />
                <h3>O palco cimentou uma convicção: a história é a espinha dorsal de qualquer produção. Essa disciplina em construir narrativas de forma imersiva e com propósito é o que hoje aplico em cada projeto. No fim, o teatro me deu a melhor escola para conceber, executar e dirigir a emoção de uma narrativa.</h3>
                <div className={styles.background}></div>
            </div>

            <p>
                Fotos: Berenice Stallivieri, Gabriel Lain, Giovani Boff. 
            </p>

        </section>
    )
}