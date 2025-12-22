import styles from './styles.module.scss'
import { useHeaderState } from '../../../utils/useHeaderState'

export default function HeaderDesk() {

    const { menuSelected, setMenuSelected } = useHeaderState()

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerLeftContainer}>
                <a onClick={() => setMenuSelected(0)} href='/'><h2>ENZO EMMER</h2></a>
            </div>

            <div className={styles.headerRightContainer}>
                <a href="/#inicio" data-selected={menuSelected === 0} onClick={() => setMenuSelected(0)}>Início</a>
                <a href="/#portifolio" data-selected={menuSelected === 1} onClick={() => setMenuSelected(1)}>Portifólio</a>
                <a href="/#sobre" data-selected={menuSelected === 2} onClick={() => setMenuSelected(2)}>Sobre</a>
                <a href="/contato" data-selected={menuSelected === 3} onClick={() => setMenuSelected(3)}>Contato</a>
                <a href="/" data-selected="false">PT-BR</a>
            </div>
        </header>
    )
}