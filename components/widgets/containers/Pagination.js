import PrevPage from "../components/PrevPage";
import NextPage from "../components/NextPage";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { backPage,  nextPage } from '../../../actions/'

 class Pagination extends React.Component{
        
    render(){

        const { lengthProducts, actualPage, productsPerPage, nextPage, backPage} = this.props
        
        const isNotPosiblePrev = (actualPage == 1);
        const isNotPosibleNext = (actualPage * productsPerPage >= lengthProducts );

        let goNextPage = nextPage;
        let goBackPage = backPage;

        if(isNotPosiblePrev){
            goBackPage = null;
        }

        if(isNotPosibleNext){
            goNextPage= null;
        }



        return (
            <div className="pagination-container">
                
                <PrevPage onClick={goBackPage} disabled={isNotPosiblePrev}/>
                <NextPage onClick={goNextPage} disabled={isNotPosibleNext}/>
            

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

    const { navigation } = state 
    const { productsPerPage, actualPage, productsLength } = navigation
    return { 
        actualPage,
        lengthProducts: productsLength,
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