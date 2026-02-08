import styles from './styles.module.scss'

import { memo, useCallback, useState } from "react"
import { useHeaderState } from '../../../utils/useHeaderState'

function HeaderMobile() {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const { menuSelected, setMenuSelected } = useHeaderState()

    const isHome = window.location.pathname === "/"

    const handleMenuOpen = useCallback(() => {
        setMenuOpen(true)
        document.body.style.overflow = "hidden"
    }, [])

    const handleMenuClose = useCallback(() => {
        setIsClosing(true)

        const timer = setTimeout(() => {
            setMenuOpen(false)
            setIsClosing(false)
            document.body.style.overflow = ""
        }, 310);

        return () => clearTimeout(timer)
    }, [])

    const handleMenuSelect = useCallback((item: number, href: string) => {
        setIsClosing(true)

        if (href.includes("#")) {
            const targetElement = document.querySelector(href)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',

                })
            }

            const timer = setTimeout(() => {
                setMenuOpen(false)
                setIsClosing(false)
                setMenuSelected(item)
                document.body.style.overflow = ""
                window.location.href = `/${href}`
            }, 310);

            return () => clearTimeout(timer)
        } else {
            window.location.href = href
        }
    }, [setMenuSelected])

    return (
        <header
            className={styles.headerWrapper}
            data-is-home={isHome}
        >
            {
                !isHome &&
                <a href="/">ENZO EMMER</a>
            }
            <div onClick={handleMenuOpen}>
                <MenuIcon />
            </div>

            {
                menuOpen &&
                <>
                    <nav data-menu data-is-closing={isClosing}>
                        <header data-menu-header>
                            <h2 data-menu-header-title>ENZO EMMER</h2>
                            <span data-menu-header-role>Diretor de Arte</span>

                            <div data-close-button onClick={handleMenuClose}>
                                <CloseIcon />
                            </div>
                        </header>

                        <div data-menu-options>
                            <span data-selected={menuSelected === 0} onClick={() => handleMenuSelect(0, '#inicio')}>Início</span>
                            <span data-selected={menuSelected === 1} onClick={() => handleMenuSelect(1, '#portifolio')}>Portifólio</span>
                            <span data-selected={menuSelected === 2} onClick={() => handleMenuSelect(2, '#sobre')}>Sobre</span>
                            <span data-selected={menuSelected === 3} onClick={() => handleMenuSelect(3, '/contato')}>Contato</span>
                            {/* <span data-selected="false">PT-BR</span> */}
                        </div>
                    </nav>
                    <div data-overlay onClick={handleMenuClose} />
                </>
            }
        </header>
    )
}

export default memo(HeaderMobile)

const MenuIcon = memo(function MenuIcon() {
    return (
        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7.5H20.5M1 1H20.5M1 14H20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
})

const CloseIcon = memo(function CloseIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1L1 14M1 1L14 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
})