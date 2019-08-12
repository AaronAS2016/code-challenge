
import ProductLayout from '../components/ProductLayout'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Product extends React.Component{
    render(){

        const {id, cost, title, category, img, profile} = this.props

        const canBuy = (profile.points >= cost)

        let coinsTobuy = 0;

        if(!canBuy){
            coinsTobuy = cost - profile.points
        }

        return (
            <ProductLayout key={id} title={title} category={category} img={img} canBuy={canBuy} cost={cost} coinsTobuy={coinsTobuy} />
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

}
  
  export default connect(
    mapStateToProps,
    null
  )(Product)

