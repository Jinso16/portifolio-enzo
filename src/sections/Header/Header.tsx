import useScreenResize from "../../utils/useScreenResize";
import HeaderDesk from "./HeaderDesk/HeaderDesk";

export default function Header() {
    const { isMobile, isDesktop } = useScreenResize()

    return (
        <>
            {
                isDesktop&&
                <HeaderDesk />
            }
        </>
    )
}