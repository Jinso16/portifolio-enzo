import { useCallback, useState } from 'react'
import styles from './styles.module.scss'

interface ImageWithModalProps {
    src: string
    alt: string
    className?: string
}

export default function ImageWithModal({ src, alt, className = '' }: ImageWithModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleOpenModal = useCallback(() => {
        openModal()
        document.body.style.overflow = 'hidden'
    }, [])

    const handleCloseModal = useCallback(() => {
        closeModal()
        document.body.style.overflow = ''
    }, [])

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`${styles.clickableImage} ${className}`}
                onClick={handleOpenModal}
            />

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <svg
                            className={styles.closeButton}
                            onClick={handleCloseModal}
                            aria-label="Fechar modal"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"
                        >
                            <g id="_01_align_center" data-name="01 align center">
                                <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414" />
                            </g>
                        </svg>
                        <img
                            src={src}
                            alt={alt}
                            className={styles.modalImage}
                        />
                    </div>
                </div>
            )}
        </>
    )
}