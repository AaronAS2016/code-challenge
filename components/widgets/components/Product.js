const Product = props => (
    <div className="product-container">

        <div className="product-buy"></div>


        <div className="product-image">
            <img src="https://aerolab-challenge.now.sh/images/iPhone8-x1.png"></img>
        </div>

        <div className="product-detail">
            <span className="product-category">Laptops </span>
            <span className="product-title">Macbook Pro</span>
        </div>


        <style jsx>
            {
                `
                
                    .product-container{
                        position:relative;
                        display:flex;
                        flex-direction:column;
                        padding:10px;
                        background: #fff;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                        justify-content:center;
                        align-items:flex-start;
                        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                    }

                    .product-container:hover{
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    }

                    .product-image{
                        position:relative;
                        width:100%;
                        display:flex;
                        justify-content:center;
                        margin-bottom:2px;
                    }

                    .product-image:after{
                        content: " ";
                        position:absolute;
                        bottom:0;
                        left:5%;
                        width: 90%;
                        background: #d9d9d9;
                        height:1px;
                    }

                    .product-detail{
                        display:flex;
                        flex-direction: column;
                        padding:5px;
                        margin: 0 5px;
                    }

                    .product-category{
                        color:#a3a3a3;
                    }

                    .product-container:after{
                        content: " ";
                        position:absolute;
                        width:100%;
                        top:0;
                        left:0;
                        height:100%;
                        background:rgba(3,3,3,.4);
                        opacity:0;
                    }

                    .product-container:hover:after{
                        opacity:1;
                    }
                
                
                
                `
            }

        </style>



    </div>
)

export default Product;