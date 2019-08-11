const ProductsCounter = props => (
    <div className="counter-container">
        <span className="counter">{props.of} of {props.total} products</span>

        <style jsx>
        {
            `

                .counter-container{
                    display:flex;
                    align-items:center;
                  
                }

                .counter{
                    padding: 20px;
                    font-size:1em;
                    border-right: 2px solid #f9f9f9;
                    font-weight:500;
                }
            
            `
        }

        </style>

    </div>
)

export default ProductsCounter;