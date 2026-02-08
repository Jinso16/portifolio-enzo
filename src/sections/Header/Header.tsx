import useScreenResize from "../../utils/useScreenResize";
import HeaderDesk from "./HeaderDesk/HeaderDesk";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

export default function Header() {
    const { isDesktop } = useScreenResize()

    return (
        <>
            {
                isDesktop &&
                <HeaderDesk />
            }
            {
                !isDesktop &&
                <HeaderMobile />
            }
        </>
    )
}