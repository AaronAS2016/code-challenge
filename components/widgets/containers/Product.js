
import ProductView from '../components/ProductView'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hideModal,  selectedProduct, showModal, requestCompleted, loadUser, resetProduct } from '../../../actions/'

class Product extends React.Component{


    handleClickRedeem = () => {
        const { selectedProduct, id, cost, title, category, img, showModal, profile, requestCompleted, loadUser, resetProduct, hideModal} = this.props
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

                if(this.status !== 200){
                    alert("You are offline! Try again when you come back online")
                    resetProduct()
                    hideModal()
                }else{
                    requestCompleted()
                    let profileUpdated = Object.assign({}, profile, profile.points -= cost)
                    loadUser(profileUpdated)
                }
            }
        };
        
    }

    redeemProduct = (productId) => {

        let data = {
            productId
        }

        let request = new XMLHttpRequest();

        request.open('POST', `https://coding-challenge-api.aerolab.co/redeem`);

        request.setRequestHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE');
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

    const { profile  } = state.coreData

    return { 
        profile
     }
  }
  

 const mapDispatchToProps = dispatch => {
    return {
        selectedProduct: bindActionCreators(selectedProduct, dispatch),
        showModal: bindActionCreators(showModal, dispatch),
        requestCompleted: bindActionCreators(requestCompleted, dispatch),
        loadUser: bindActionCreators(loadUser,dispatch),
        resetProduct: bindActionCreators(resetProduct, dispatch),
        hideModal: bindActionCreators(hideModal, dispatch)

    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)

