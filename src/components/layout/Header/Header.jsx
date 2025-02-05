import {Link} from "react-router-dom";
import {Container, Top} from "./Style";
import {SvgLogo, SvgRostoLogo} from "../../Svgs/Svgs";
import MarqueeBar from "../MarqueeBar/MarqueeBar";

const Header = () => (
    <Container>
        <MarqueeBar/>
        <Top>
            <Link to="/">
                <SvgLogo/>
            </Link>

            <div className={"svg.container"}>
                <SvgRostoLogo/>
            </div>
        </Top>
    </Container>
)

export default Header;