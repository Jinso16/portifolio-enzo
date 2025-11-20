import styles from './styles.module.scss'

export default function FooterDesk() {
    return (
        <footer>
            <div>
                <a className={styles.resumeLink} href="">
                    CURRÍCULO
                </a>
            </div>

            <section className={styles.socialMediaWrapper}>
                <a target='_blank' href="https://instagram.com/enzoemmer"><InstagramLogo /></a>
                <a target='_blank' href="https://www.linkedin.com/in/enzo-emmer-6aa958345/"><LinkedinLogo /></a>
                <a target='_blank' href=""><GithubLogo /></a>
            </section>

            <div>
                <a className={styles.emailLink} href="mailto:enzoemmer7@gmail.com">
                    enzoemmer7@gmail.com
                </a>
            </div>
        </footer>
    )
}

function InstagramLogo() {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9583 7.375H22.9725M8.08333 1H22.25C26.162 1 29.3333 4.17132 29.3333 8.08333V22.25C29.3333 26.162 26.162 29.3333 22.25 29.3333H8.08333C4.17132 29.3333 1 26.162 1 22.25V8.08333C1 4.17132 4.17132 1 8.08333 1ZM20.8333 14.2742C21.0082 15.4532 20.8068 16.6573 20.2578 17.7153C19.7089 18.7732 18.8403 19.6312 17.7756 20.167C16.711 20.7029 15.5045 20.8894 14.3277 20.7001C13.1509 20.5107 12.0638 19.9551 11.221 19.1123C10.3782 18.2695 9.82262 17.1824 9.63326 16.0056C9.4439 14.8289 9.63043 13.6224 10.1663 12.5577C10.7022 11.493 11.5601 10.6245 12.6181 10.0755C13.676 9.52655 14.8802 9.32517 16.0592 9.5C17.2618 9.67834 18.3752 10.2387 19.2349 11.0984C20.0946 11.9581 20.655 13.0715 20.8333 14.2742Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function LinkedinLogo() {
    return (
        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8333 9.25C23.0877 9.25 25.2497 10.1192 26.8437 11.6664C28.4378 13.2135 29.3333 15.312 29.3333 17.5V27.125H23.6667V17.5C23.6667 16.7707 23.3682 16.0712 22.8368 15.5555C22.3055 15.0397 21.5848 14.75 20.8333 14.75C20.0819 14.75 19.3612 15.0397 18.8299 15.5555C18.2985 16.0712 18 16.7707 18 17.5V27.125H12.3333V17.5C12.3333 15.312 13.2289 13.2135 14.8229 11.6664C16.417 10.1192 18.579 9.25 20.8333 9.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.66667 10.625H1V27.125H6.66667V10.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.83333 6.5C5.39814 6.5 6.66667 5.26878 6.66667 3.75C6.66667 2.23122 5.39814 1 3.83333 1C2.26853 1 1 2.23122 1 3.75C1 5.26878 2.26853 6.5 3.83333 6.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

function GithubLogo() {
    return (
        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9169 26.538C3.83357 28.663 3.83357 22.9963 1.00024 22.288M20.8336 30.788V25.3055C20.8867 24.6299 20.7954 23.9508 20.5658 23.3133C20.3362 22.6758 19.9736 22.0945 19.5019 21.608C23.9502 21.1121 28.6252 19.4263 28.6252 11.6913C28.6249 9.71338 27.864 7.81132 26.5002 6.37879C27.146 4.64834 27.1004 2.73562 26.3727 1.03796C26.3727 1.03796 24.7011 0.542124 20.8336 3.13462C17.5866 2.25462 14.1639 2.25462 10.9169 3.13462C7.0494 0.542124 5.37774 1.03796 5.37774 1.03796C4.6501 2.73562 4.60444 4.64834 5.25024 6.37879C3.87625 7.82195 3.11464 9.7412 3.12524 11.7338C3.12524 19.4121 7.80024 21.098 12.2486 21.6505C11.7825 22.1321 11.423 22.7064 11.1936 23.3362C10.9642 23.9659 10.8699 24.6369 10.9169 25.3055V30.788" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}