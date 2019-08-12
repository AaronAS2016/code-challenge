import { Layout } from "../components/Layout";
import { ProductsCointaner } from "../components/widgets/containers/ProductsContainer";
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadUser } from '../store'

class Index extends React.Component { 

    static async getInitialProps () {
        try{
            let headers = {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
            }

            let miInit = { method: 'GET',
                            headers,
                            mode: 'cors',
                            cache: 'default' };
            let req = await fetch('https://coding-challenge-api.aerolab.co/user/me', miInit)
            let body = await req.json()

            return  { profile: body, status: 200 }

        }catch(e){
            return { profile: null, status: 500 }
        }
    }

    componentDidMount (){
        const { loadUser, profile } = this.props
        loadUser(profile)
    }
    
    render() {
    console.log(this.props)

    return <Layout title="Aerolab">
          <ProductsCointaner>
            
          </ProductsCointaner>
      </Layout>
  }
 }

 function mapStateToProps (state) {
    return { state }
  }
  

 const mapDispatchToProps = dispatch => {
    return {
        loadUser: bindActionCreators(loadUser, dispatch)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)