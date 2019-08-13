import ActionBar from "./ActionBar";
import Product from "../containers/Product";
import ProductsLayout from "../components/ProductsLayout";
import Modal from '../components/Modal';
import ModalReedem from '../components/ModalRedeem';
import Pagination from "./Pagination";
import { sortByRecent, sortByLowestPrice, sortByHighestPrice } from '../../../helpers/sortProducts'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showModal, hideModal, resetProduct } from '../../../store'

class ProductsCointaner extends React.Component{



    handleClickModalSuccess = () => {
        const { hideModal } = this.props
        hideModal()
        resetProduct()
    }


    render(){

        
        const { products, actualPage, productsPerPage, sortMethod, selectedProduct, modalState, success} = this.props;

        const sortFunctions = {
            recent: sortByRecent,
            lowest: sortByLowestPrice,
            highest: sortByHighestPrice
        }

        let start = 0;

        if(actualPage != 1){
            start = (actualPage - 1) * productsPerPage;
        }

        return (
            <section>

                <ActionBar/>

                <ProductsLayout>
                    {
                        sortFunctions[sortMethod](products).slice(start , productsPerPage*actualPage).map(product => (
                            <Product
                                    key={product._id} 
                                    id={product._id}
                                    cost={product.cost} 
                                    title={product.name} 
                                    category={product.categoy} 
                                    img={product.img.url}      
                            />
                        ))

                    }
                </ProductsLayout>

                <Modal hidden={!modalState}>
                    <ModalReedem
                          id={selectedProduct._id}
                          cost={selectedProduct.cost} 
                          title={selectedProduct.name} 
                          category={selectedProduct.categoy} 
                          img={selectedProduct.img.hdUrl}
                          success={success}
                          onClick={this.handleClickModalSuccess}
                    >

                    </ModalReedem>
                </Modal>

                <Pagination/>


            </section>
        )
    }
}


function mapStateToProps (state) {



    const { modalState, success  } = state

    return { 
        modalState,
        success
    }
}
  

 const mapDispatchToProps = dispatch => {
    return {
        hideModal: bindActionCreators(hideModal, dispatch)
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductsCointaner)

