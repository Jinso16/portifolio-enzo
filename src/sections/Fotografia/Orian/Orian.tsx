import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'

export default function Orian() {
    return (
        <section className={styles.orian}>
            <PageHeader title='FOTOJORNALISMO<br>SOCIAL - orian' />

            <p>
                O “Projeto Orian” é uma iniciativa de professores, pedagogos e servidores da cidade de Caxias do Sul, RS, Brasil, que aproxima crianças de uma comunidade por meio do esporte. Sediado em uma escola da rede pública, o projeto acolhe crianças dos 5 aos 18 anos semanalmente, promovendo treinos de futebol e a participação em campeonatos regionais. Cobrir esse projeto foi transformador.
            </p>

            <div className={styles.twoImages}>
                <div className={styles.image1}>
                    <img src="/Orian/orian1.png" alt="" />
                </div>
                <div className={styles.image2}>
                    <img src="/Orian/orian2.png" alt="" /> 
                </div>
            </div>

            <p>
                Minha intenção com esse ensaio foi transmitir a emoção que senti ao conhecer as histórias de cada uma das crianças do projeto. As dez fotos estabelecem uma narrativa de ressignificação do esporte, que se apoia nas relações e estreita laços eternos. 
            </p>

            <img className={styles.soloImage} src="/Orian/orian3.png" alt="" />

            <p>
                Uma das minhas fotos prediletas. Mostro para o professor e ele vira de costas, com certa frieza inesperada. Olho de relance em seguida e ele está enxugando lágrimas. 
            </p>

            <div className={styles.gridFourImages}>
                <div className={styles.image1}>
                    <img src="/Orian/orian4.jpg" alt="" />
                </div>
                <div className={styles.image2}>
                    <img src="/Orian/orian5.jpg" alt="" />
                </div>
                <div className={styles.image3}>
                    <img src="/Orian/orian6.jpg" alt="" />
                </div>
                <div className={styles.image4}>
                    <img src="/Orian/orian7.jpg" alt="" />
                </div>
            </div>

            <p>
                Na comunidade, não há distinção. Às vezes, nem mesmo o sapato adequado. Durante a cobertura, um dos professores comenta sobre um aluno que, entristecido, deixou de participar do projeto. Ao ser questionado sobre a saída, explicou que um de seus tios, usuário de drogas, havia vendido seu único tênis - aquele que usava para jogar futebol - para pagar por pílulas e outras substâncias.
            </p>

            <img className={styles.soloImage} src="/Orian/orian8.png" alt="" />

            <p>
                A educação pública brasileira carece de uma estrutura digna para os estudantes. Mesmo assim, para as crianças do projeto, pouco é necessário para transformar a escola em lar. Entendi os momentos de treino como um respiro em meio à realidade cotidiana. Esse é o motivo principal por trás da coloração fria das fotos. Esse é o cenário cru de uma realidade vivida por uma parcela assustadoramente grande da população brasileira. O verdadeiro calor está nas atividades e nos sonhos que, naquele intervalo de tempo, são compartilhados pelo grupo.
            </p>

            <div className={styles.twoImages}>
                <div className={styles.image1}>
                    <img src="/Orian/orian9.jpg" alt="" />
                </div>
                <div className={styles.image2}>
                    <img src="/Orian/orian10.jpg" alt="" /> 
                </div>
            </div>

            <p>
                A partir de um material tão rico e humano, minha responsabilidade foi curar e enquadrar a realidade para que ela ressoasse com máxima potência. Não se tratava apenas de documentar, mas de  capturar a emoção que transformou a vulnerabilidade da comunidade em um relato visual de esperança e humanização. O resultado é um ensaio coeso, onde a fotografia não apenas registra histórias que precisam ser vistas, mas as eleva a um patamar de importância, cumprindo nosso objetivo acadêmico e social de emocionar e gerar impacto.
            </p>
        </section>
    )
}