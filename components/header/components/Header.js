import { Navbar } from "../containers/Navbar";
import Banner from "./Banner";

const headerStyles = {
    display: 'flex',
    alignItems: 'center'
}

const Header = props => (
    <header style={headerStyles}>
        <Navbar></Navbar>
        <Banner></Banner>
    </header>
)

export default Header;