import styles from './styles.module.scss'
import PageHeader from '../../PageHeader/PageHeader'
import React, { useState } from 'react'
import ImageWithModal from '../../ImageWithModal/ImageWithModal'
import VideoModal from '../../VideoModal/VideoModal'

export default function TerraAVista() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false)

    const openVideoModal = () => {
        setIsVideoModalOpen(true)
        document.body.style.overflow = "hidden"
    }

    const closeVideoModal = () => {
        setIsVideoModalOpen(false)
        document.body.style.overflow = ""
    }

    return (
        <section className={styles.terraVista}>
            <PageHeader title='TERRA À VISTA' />

            <p>
                “Terra à Vista” é um curta metragem que aborda uma relação problemática entre dois irmãos que, em meio a problemas familiares, precisam se agarrar um ao outro e às memórias de um passado que eles gostariam que tivesse durado mais tempo.
            </p>

            <div className={styles.projectsWrapper}>
                <div className={styles.terraVistaWrapper} onClick={openVideoModal} >
                    <img src='/Audiovisual/terraVistaImg.png' alt="Assista ao projeto Terra à Vista" />
                    <h2>ASSISTA À "TERRA À VISTA"</h2>
                    <div className={styles.backgroundGradient} />
                </div>
            </div>

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                src="https://drive.google.com/file/d/17SQRyZ02AX0yXEPCdohNvYSqbqYvxJKU/preview"
                title="Terra à Vista - Curta Metragem"
            />

            <div className={styles.leftTextImage}>
                <p>
                    Este foi o projeto de conclusão do Itinerário Formativo no qual me especializei durante o Ensino Médio, Cinema e Produção Audiovisual, e sua materialização me proporcionou uma sensação de dever cumprido. A história acompanha Arthur e Miguel, dois irmãos com personalidades opostas. Miguel é uma criança sonhadora que percebe o mundo como um livro em branco, enquanto Arthur é um adolescente forçado a amadurecer precocemente, mantendo uma relação complicada com o caçula.
                </p>

                <div className={styles.image1}>
                    <ImageWithModal src="/Audiovisual/TerraVista/terra1.jpg" alt="" />
                </div>
            </div>

            <div className={styles.twoImages}>
                <div className={styles.image1}>
                    <ImageWithModal src="/Audiovisual/TerraVista/terra2.jpg" alt="" />
                </div>
                <div className={styles.image2}>
                    <ImageWithModal src="/Audiovisual/TerraVista/terra3.jpg" alt="" />
                </div>
            </div>

            <div className={styles.twoImagesTextRight}>
                <div className={styles.images}>
                    <div className={styles.image1}>
                        <ImageWithModal src="/Audiovisual/TerraVista/terra4.jpg" alt="" />
                    </div>
                    <div className={styles.image2}>
                        <ImageWithModal src="/Audiovisual/TerraVista/terra5.jpg" alt="" />
                    </div>
                </div>

                <p>
                    Essa dinâmica é testada quando a atmosfera familiar se deteriora com a separação dos pais, e os irmãos precisam encontrar um porto seguro não em casa, mas um no outro. O curta conta uma história profunda sobre amor, redenção e memória.
                    Minha dedicação a este projeto foi total, não apenas no roteiro e na atuação, mas principalmente na arquitetura detalhada da narrativa, através de uma direção minuciosa que trascendeu aos limites orçamentários e estruturais.
                </p>
            </div>

            <div className={styles.poster}>
                <ImageWithModal src="/Audiovisual/TerraVista/terra-poster.png" alt="" />
            </div>
        </section>
    )
}