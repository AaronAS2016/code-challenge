
import ProductView from '../components/ProductView'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectedProduct, showModal, requestCompleted, loadUser } from '../../../store'

class Product extends React.Component{


    handleClickRedeem = () => {
        const { selectedProduct, id, cost, title, category, img, showModal, profile, requestCompleted, loadUser } = this.props
        const product = {
            _id:id,
            cost,
            name: title,
            category,
            img
        }
        selectedProduct(product)
        showModal()


        this.redeemProduct(id)
     
            .then(data => {
                console.log(data)
                requestCompleted()
                profile.points =- cost
                loadUser(profile)
        })
    
        
    }

    redeemProduct = (productId) => {

        let headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
        }

        let data = {
            productId
        }

        let miInit = { 
            method: 'POST',
            headers,
            mode: 'cors',
            cache: 'default',
            body: data 
        };

        return fetch('https://coding-challenge-api.aerolab.co/redeem', miInit)
            .then(req => req.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
        })
    } 
 
    render(){

        const {id, cost, title, category, img, profile} = this.props

        const canBuy = (profile.points >= cost)

        let coinsTobuy = 0;

        if(!canBuy){
            coinsTobuy = cost - profile.points
        }

        return (
            <ProductView 
                key={id} 
                title={title} 
                category={category} 
                img={img} 
                canBuy={canBuy} 
                cost={cost} 
                coinsTobuy={coinsTobuy} 
                onClick={this.handleClickRedeem}
            />
        )


    }
}


function mapStateToProps (state) {

    const { profile  } = state

    return { 
        profile
     }
  }
  

 const mapDispatchToProps = dispatch => {
    return {
        selectedProduct: bindActionCreators(selectedProduct, dispatch),
        showModal: bindActionCreators(showModal, dispatch),
        requestCompleted: bindActionCreators(requestCompleted, dispatch),
        loadUser: bindActionCreators(loadUser,dispatch)
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)

