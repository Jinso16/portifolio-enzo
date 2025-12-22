import styles from './styles.module.scss'

interface HeaderProps {
    title: string
}

export default function PageHeader({title}: HeaderProps) {
    return (
        <header className={styles.pageHeader}>
            <button onClick={() => window.history.back()}></button>
            <h1 dangerouslySetInnerHTML={{__html: title}} />
        </header>
    )
}