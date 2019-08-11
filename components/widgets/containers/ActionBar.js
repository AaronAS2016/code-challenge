import ProductsCounter from "../components/ProducstCounter";
import SortCointainer  from "./SortContainer";
import { device } from '../../../helpers/breakpoints';


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