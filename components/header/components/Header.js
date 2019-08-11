import { NavbarContainer } from "../containers/Navbar";
import Banner from "./Banner";

const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}

const Header = props => (
    <header style={headerStyles}>
        <NavbarContainer></NavbarContainer>
        <Banner src="static/header-x1.png" title="Electronics"></Banner>
    </header>
)

export default Header;