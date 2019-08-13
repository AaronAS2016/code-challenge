import {device} from '../../../helpers/breakpoints'

const ProductsCounter = props => (
    <div className="counter-container">
        <span className="counter">{props.of} - {props.totalPage} of {props.total} products</span>

        <style jsx>
        {
            `

                .counter-container{
                    display:flex;
                    align-items:center;
                  
                }

                .counter{
                    padding: 20px;
                    color: #616161;
                    border-right: 2px solid #d9d9d9;
                    font-weight:500;
                }

                @media ${device.tablet}{
                    .counter{
                        font-size:1.3em;
                    }
                }
            
            `
        }

        </style>

    </div>
)

export default ProductsCounter;