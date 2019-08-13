import { Layout } from "../components/Layout";
import  ProductsCointaner  from "../components/widgets/containers/ProductsContainer";
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadUser, loadProducts } from '../store'
import Error from 'next/error'

class Index extends React.Component { 

    static async getInitialProps () {
        try{
            let headers = {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : process.env.AUTHENTICATION_TOKEN,
            }

            let miInit = { method: 'GET',
                            headers,
                            mode: 'cors',
                            cache: 'default' };
            let [reqProfile, reqProducts ] = await Promise.all([
                fetch(`${process.env.API_URL}/user/me`, miInit),
                fetch(`${process.env.API_URL}/products`, miInit)
            ])
            let body = await reqProfile.json()
            let products = await reqProducts.json()

            return  { profile: body, products,  statusCode: 200 }

        }catch(e){
            return { profile: null, products:null, statusCode: 503 }
        }
    }

    componentDidMount (){
        const { loadUser, loadProducts , profile, products } = this.props
        loadUser(profile)
        loadProducts(products)
    }
    
    render() {

    const {statusCode} = this.props

    if(statusCode !== 200){
        return <Error  statusCode={statusCode} />
    }

    
    const { products, productsPerPage, actualPage, sortBy, selectedProduct } = this.props

    return <Layout title="Aerolab">
          <ProductsCointaner
            products={products} 
            productsPerPage={productsPerPage} 
            actualPage={actualPage}
            sortMethod={sortBy}
            selectedProduct={selectedProduct}/>
      </Layout>
  }
 }

 function mapStateToProps (state) {

    const { actualPage, productsPerPage, sortBy, selectedProduct } = state

    return { 
        actualPage,
        productsPerPage,
        sortBy,
        selectedProduct
     }
  }
  

 const mapDispatchToProps = dispatch => {
    return {
        loadUser: bindActionCreators(loadUser, dispatch),
        loadProducts: bindActionCreators(loadProducts, dispatch)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)