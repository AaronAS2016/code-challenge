
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

        let request = this.redeemProduct(id)
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                requestCompleted()
                let profileUpdated = Object.assign({}, profile, profile.points -= cost)
                loadUser(profileUpdated)
            }
        };
        
    }

    redeemProduct = (productId) => {

        let data = {
            productId
        }

        let request = new XMLHttpRequest();

        request.open('POST', `${process.env.API_URL}/redeem`);

        request.setRequestHeader('Authorization', process.env.AUTHENTICATION_TOKEN);
        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify(data));

        return request
    
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

