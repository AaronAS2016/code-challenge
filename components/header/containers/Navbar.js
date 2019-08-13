
import Navbar from "../components/Navbar";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser } from '../../../actions/' 

 class NavbarContainer extends React.Component{
    render(){
        const { profile } = this.props

        return (
            <Navbar logoSrc="static/aerolab-logo.svg" logoAlt="Aerolab" coins={profile.points} name={profile.name}></Navbar>   
        )
    }

    componentDidMount(){
        this.updateProfile()
    }

    updateProfile = () => {

        const { loadUser } = this.props
        let headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
        }
        let miInit = { method: 'GET',
                        headers,
                        mode: 'cors',
                        cache: 'default' };
        fetch('https://coding-challenge-api.aerolab.co/user/me', miInit)
            .then(req => req.json())
            .then(profile => {
                loadUser(profile);

        })
      
    }



}


const mapDispatchToProps = dispatch => {
    return {
        loadUser: bindActionCreators(loadUser, dispatch),
    }
  }

function mapStateToProps (state) {
    const { profile } = state.coreData
    return { profile }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer)