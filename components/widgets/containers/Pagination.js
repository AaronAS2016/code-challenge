import PrevPage from "../components/PrevPage";
import NextPage from "../components/NextPage";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { backPage,  nextPage } from '../../../store'

 class Pagination extends React.Component{
    
    
    

    
    render(){




        const { lengthProducts, actualPage, productsPerPage, nextPage, backPage} = this.props
        
        const isPosiblePrev = (actualPage == 1);
        const isPosibleNext = (actualPage * productsPerPage >= lengthProducts );



        return (
            <div className="pagination-container">
                
                <PrevPage onClick={backPage} disabled={isPosiblePrev}/>
                <NextPage onClick={nextPage} disabled={isPosibleNext}/>
            

                <style jsx>

                    {
                        `
                        
                        
                            .pagination-container{
                                width:80%;
                                margin:5px 10%;
                                display:flex;
                                justify-content:center;
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
  

 const mapDispatchToProps = dispatch => {
    return {
        nextPage: bindActionCreators(nextPage, dispatch),
        backPage: bindActionCreators(backPage, dispatch)
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pagination)