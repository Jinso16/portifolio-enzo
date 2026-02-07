import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'

import ImageWithModal from '../../ImageWithModal/ImageWithModal'

export default function TPIFS() {

    return (
        <section className={styles.tpifs}>
            <PageHeader title='THE PLACE I FEEL SAFE' />

            <p>
                “The Place I Feel Safe” é, de longe, meu projeto mais ambicioso até hoje. Sempre acreditei que os videogames são o suprassumo da arte contemporânea, por poderem conciliar visuais, narrativa, trilha sonora e mecânica em uma única experiência. Fazer meu próprio jogo parece a materialização de um sonho.
            </p>

            <div data-tpifs-tv-wrapper>
                <ImageWithModal src="/Videogames/TPIFS/tpifsTV.png" alt="" />
            </div>

            <div className={styles.leftTextImage}>
                <p>
                    Entendo este título como a intersecção ideal das minhas paixões: a arquitetura da narrativa e a potência da arte visual. Como idealizador da obra, meu trabalho começou na estruturação de uma antologia de contos digitais que mergulha no coração arrevesado de uma casa de campo no interior do Brasil.
                </p>

                <ImageWithModal src="/Videogames/TPIFS/tpifsQuartoMarco.png" alt="" />
            </div>

            <div className={styles.phrase}>
                <svg width="114" height="106" viewBox="0 0 114 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.0856 4.67312V23.7048C49.0856 26.2867 46.9939 28.381 44.4119 28.381C35.2059 28.381 30.2012 37.8247 29.5079 56.4659H44.4119C46.9939 56.4659 49.0856 58.5577 49.0856 61.1425L49.0856 101.327C49.0856 103.909 46.9939 106 44.4119 106H4.67377C2.09173 106 0 103.909 0 101.327L0 61.1425C0 52.2064 0.899684 44.0016 2.67245 36.7587C4.49143 29.3374 7.2819 22.8464 10.9641 17.4666C14.7558 11.9411 19.4993 7.60223 25.0632 4.58114C30.6634 1.54246 37.1731 0 44.4149 0C46.9939 0 49.0856 2.09331 49.0856 4.67312ZM109.332 0C102.093 0 95.5802 1.54196 89.9806 4.58114C84.4162 7.60223 79.6726 11.9411 75.8814 17.4666C72.1968 22.8494 69.4083 29.3374 67.5868 36.7642C65.8141 44.0066 64.9174 52.2059 64.9174 61.142V101.326C64.9174 103.908 67.0096 106 69.5881 106H109.33C111.908 106 114 103.908 114 101.326V61.142C114 58.5572 111.908 56.4654 109.33 56.4654H94.6353C95.3195 37.8242 100.254 28.3805 109.33 28.3805C111.908 28.3805 114 26.2862 114 23.7043V4.67312C114.003 2.09331 111.911 0 109.332 0Z" fill="#7149E9" />
                </svg>

                <h2>Em um piscar de olhos, ou depois de uma noite de sono, a realidade pode se tornar um pesadelo cruel. E você nem o viu chegando.</h2>

                <svg style={{ rotate: "180deg" }} width="114" height="106" viewBox="0 0 114 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.0856 4.67312V23.7048C49.0856 26.2867 46.9939 28.381 44.4119 28.381C35.2059 28.381 30.2012 37.8247 29.5079 56.4659H44.4119C46.9939 56.4659 49.0856 58.5577 49.0856 61.1425L49.0856 101.327C49.0856 103.909 46.9939 106 44.4119 106H4.67377C2.09173 106 0 103.909 0 101.327L0 61.1425C0 52.2064 0.899684 44.0016 2.67245 36.7587C4.49143 29.3374 7.2819 22.8464 10.9641 17.4666C14.7558 11.9411 19.4993 7.60223 25.0632 4.58114C30.6634 1.54246 37.1731 0 44.4149 0C46.9939 0 49.0856 2.09331 49.0856 4.67312ZM109.332 0C102.093 0 95.5802 1.54196 89.9806 4.58114C84.4162 7.60223 79.6726 11.9411 75.8814 17.4666C72.1968 22.8494 69.4083 29.3374 67.5868 36.7642C65.8141 44.0066 64.9174 52.2059 64.9174 61.142V101.326C64.9174 103.908 67.0096 106 69.5881 106H109.33C111.908 106 114 103.908 114 101.326V61.142C114 58.5572 111.908 56.4654 109.33 56.4654H94.6353C95.3195 37.8242 100.254 28.3805 109.33 28.3805C111.908 28.3805 114 26.2862 114 23.7043V4.67312C114.003 2.09331 111.911 0 109.332 0Z" fill="#7149E9" />
                </svg>
            </div>

            <div className={styles.twoImages}>
                <ImageWithModal src="/Videogames/TPIFS/tpifsCar.png" alt="" />
                <ImageWithModal src="/Videogames/TPIFS/tpifsMinigame.png" alt="" />
            </div>

            <div data-tpifs-outside-wrapper>
                <ImageWithModal src="/Videogames/TPIFS/tpifsOutside.png" alt="" />
            </div>

            <div data-tpifs-kitchen-wrapper>
                <ImageWithModal src="/Videogames/TPIFS/tpifsKitchen.png" alt="" />
            </div>

            <div className={styles.tripleDiv}>
                <p>
                    Se a narrativa é a alma do projeto, a arte visual é o corpo que a torna palpável. Como artista principal envolvido na criação de cenários, personagens, e miscelâneas, fui responsável por estabelecer a paleta, a atmosfera e a identidade visual que confere a "The Place I Feel Safe" seu tom ideal.
                </p>

                <ImageWithModal src="/Videogames/TPIFS/tpifsBanner.png" alt="" />

                <p>
                    A direção de arte não é meramente estética, mas um veículo direto para o storytelling, desde a luz sombria que permeia os corredores até o design sutilmente perturbador que transforma a casa em um personagem vivo, cujos detalhes visuais escondem e revelam mistérios.
                </p>
            </div>

            <div data-photos-phrase>
                <h2>“Cada cômodo, cada objeto, cada centímetro dessa casa conta partes de uma história.”</h2>

                <div data-photos>
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto1.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto2.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto3.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto4.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto5.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto6.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto7.png" alt='' />
                    <img src="/Videogames/TPIFS/Photos/tpifsPhoto8.png" alt='' />
                </div>
            </div>

            <div className={styles.twoTexts}>
                <p>
                    Este projeto é a prova viva da minha crença de que os videogames são a forma de arte mais complexa e completa que se pode conceber, pois exigem o domínio de múltiplas disciplinas, fundindo a espinha dorsal da narrativa (por meio da escrita criativa), a identidade visual (por meio da direção de arte), o pulso emocional da trilha sonora e a interação da mecânica em uma única experiência.
                </p>

                <p>
                    "The Place I Feel Safe" polariza e demonstra minhas habilidades como artista multimídia, mostrando que posso não apenas escrever uma história envolvente, mas também dar-lhe vida através de uma visão artística e técnica. O jogo ainda não foi publicado, mas pode ser <a target='_blank' rel="noreferrer" href='https://lilastra-studio.itch.io/the-place-i-feel-safe'>apoiado aqui</a>.
                </p>
            </div>

        </section>
    )
}