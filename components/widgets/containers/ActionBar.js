import ProductsCounter from "../components/ProducstCounter";
import SortCointainer  from "./SortContainer";
import { device } from '../../../helpers/breakpoints';

import { connect } from 'react-redux'

class ActionBar extends React.Component{
    render(){

        const { actualPage, productsPerPage, lengthProducts } = this.props;

        return (
            <div className="action-bar">
                <ProductsCounter of={actualPage * productsPerPage} total={lengthProducts}></ProductsCounter>
                <SortCointainer></SortCointainer>

                <style jsx >
                    {
                        `
                            .action-bar{
                                display:flex;  
                                align-items:center;
                                justify-content:center;
                            } 

                            @media ${device.tablet}{
                                .action-bar{
                                    position:relative;
                                    justify-content:flex-start;
                                    padding: 24px 10%;
                                    margin: 40px  0 20px 0;
                                }


                                .action-bar:after{
                                    content: " ";
                                    position:absolute;
                                    bottom:0;
                                    left:10%;
                                    width: 80%;
                                    background: #d9d9d9;
                                    height:1px;
                                }

                             }
                            
                            
                        
                        
                        `
                    }

                </style>

            </div>
        )
    }
}

function mapStateToProps (state) {

    const { actualPage,  productsPerPage, products } = state
    return { 
        actualPage,
        lengthProducts: products.length,
        productsPerPage
     }
  }

  export default connect(
    mapStateToProps
  )(ActionBar)