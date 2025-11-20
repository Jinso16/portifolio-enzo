import useScreenResize from "../../utils/useScreenResize";
import FooterDesk from "./FooterDesk/FooterDesk";

export default function Footer() {
    const { isMobile, isDesktop } = useScreenResize()

    return (
        <>
            {
                isDesktop&&
                <FooterDesk />
            }
        </>
    )
}