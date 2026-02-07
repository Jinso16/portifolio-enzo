import React from 'react'
import styles from './styles.module.scss'

interface VideoProps {
    isOpen: boolean
    onClose: () => void
    src: string
    title: string
}

export default function VideoModal({ isOpen, onClose, src, title }: VideoProps) {
    if (!isOpen) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <svg
                    className={styles.closeButton} onClick={onClose}
                    aria-label="Fechar modal de video"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"
                >
                    <g id="_01_align_center" data-name="01 align center">
                        <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414" />
                    </g>
                </svg>
                <div className={styles.videoContainer}>
                    <iframe
                        src={src}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}