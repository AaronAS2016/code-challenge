
import Navbar from "../components/Navbar";
import { connect } from 'react-redux'

 class NavbarContainer extends React.Component{
    render(){
        const { profile } = this.props

        return (
            <Navbar logoSrc="static/aerolab-logo.svg" logoAlt="Aerolab" coins={profile.points} name={profile.name}></Navbar>   
        )
    }
}

function mapStateToProps (state) {
    const { profile } = state
    return { profile }
}
  
export default connect(
    mapStateToProps,
    null
)(NavbarContainer)