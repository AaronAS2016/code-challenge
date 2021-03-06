import { Layout } from "../components/Layout";
import  ProductsCointaner  from "../components/widgets/containers/ProductsContainer";
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadUser, loadProducts, changeProductsLength } from '../actions/'
import Error from 'next/error'

class Index extends React.Component { 

    static async getInitialProps () {
        try{

            //fetching the products and user profile in server

            let headers = {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
            }

            let miInit = { method: 'GET',
                            headers,
                            mode: 'cors',
                            cache: 'default' };
            let [reqProfile, reqProducts ] = await Promise.all([
                fetch(`https://coding-challenge-api.aerolab.co/user/me`, miInit),
                fetch(`https://coding-challenge-api.aerolab.co/products`, miInit)
            ])
            let body = await reqProfile.json()
            let products = await reqProducts.json()

            return  { profile: body, products,  statusCode: 200 }

        }catch(e){
            return { profile: null, products:null, statusCode: 503 }
        }
    }

    componentDidMount (){

        const { loadUser, loadProducts , profile, products, changeProductsLength} = this.props
        //saving into the store the request
        loadUser(profile)
        loadProducts(products)
        changeProductsLength(products.length)
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

    const { navigation } = state

    const { actualPage, productsPerPage, sortBy, selectedProduct } = navigation
   
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
        loadProducts: bindActionCreators(loadProducts, dispatch),
        changeProductsLength: bindActionCreators(changeProductsLength, dispatch)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)