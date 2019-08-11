import PrevPage from "../components/PrevPage";
import NextPage from "../components/NextPage";

export default class Pagination extends React.Component{
    render(){
        return (
            <div className="pagination-container">
                
                <PrevPage/>
                <NextPage/>
            

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