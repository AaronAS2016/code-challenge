
import { device } from '../../../helpers/breakpoints' 

const ProductsLayout = props => (
    <div className="products-grid">
        {props.children}
        <style jsx>
            {
                `

                    .products-grid{
                        width:80%;
                        margin:20px 10%;
                        display:grid;
                        grid-template-columns: 1fr;
                        gap: 10px;

                    }


                    @media ${device.tablet}{
                        .products-grid{
                            grid-template-columns: 1fr 1fr;
                        }
                    }

                    
                    @media ${device.desktop}{
                        .products-grid{
                            grid-template-columns: 1fr 1fr 1fr;
                        }
                    }

                    @media ${device.longDesktop}{
                        .products-grid{
                            grid-template-columns: 1fr 1fr 1fr 1fr;
                        }
                    }
                
                
                `


            }

        </style>
    </div>
)

export default ProductsLayout;