import styles from './styles.module.scss'

export default function SoftSkills() {
        
    return (
        <section className={styles.softSkillsWrapper}>
            <header>
                <span>03.</span>
                <h2>SOFT SKILLS</h2>
            </header>

            <div className={styles.skillsContainer}>
                <div className={styles.skillWrapper}>
                    <h3>Comunicação</h3>
                    <p>
                        A comunicação foi uma escolha óbvia durante o período de escolha profissional. Sou um grande entusiasta das teorias que estudam a maneira humana de interagir com o mundo, e acredito que a comunicação pode nos levar a lugares incríveis.
                    </p>
                </div>

                <div className={styles.skillWrapper}>
                    <h3>Escrita</h3>
                    <p>
                        Quando criança, encontrei refúgio em narrativas que moldaram meu senso de criação. Percebo a escrita como um dos meus grandes motores criativos, estando presente direta ou indiretamente em todos os meus projetos. É uma das coisas que mais amo fazer.                    
                    </p>
                </div>

                <div className={styles.skillWrapper}>
                    <h3>Direção de Arte</h3>
                    <p>
                        Seja em projetos audiovisuais, teatrais ou em quaisquer outros ramos criativos, sempre gostei do cargo de direção. Sinto que as responsabilidades envolvidas, como a conceituação, supervisão e colaboração me fazem imergir por inteiro no processo criativo.                 
                    </p>
                </div>

                <div className={styles.skillWrapper}>
                    <h3>Videogames</h3>
                    <p>
                        Entendo os videogames como a maneira mais completa de expressar arte que conhecemos.  Da narrativa à criação de arte, som e mecânica, eles são capazes de imprimir marcas eternas e me conectaram ao que eu entendo como minha missão no mundo: contar histórias.                    
                    </p>
                </div>
            </div>
        </section>
    )
}