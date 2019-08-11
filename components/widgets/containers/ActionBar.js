import ProductsCounter from "../components/ProducstCounter";
import SortCointainer  from "./SortContainer";

export default class ActionBar extends React.Component{
    render(){
        return (
            <div className="action-bar">
                <ProductsCounter of="16" total="32"></ProductsCounter>
                <SortCointainer></SortCointainer>

                <style jsx >
                    {
                        `
                            .action-bar{
                                display:flex;  
                                align-items:center;
                            }    
                        
                        
                        `
                    }

                </style>

            </div>
        )
    }
}