import Coins from "../../header/components/Coins";

const customCoinsStyles = {
    background: 'none',
    color: "#fff",
    fontSize: '2.1em'
}

const coinsStyles = {
    opacity: 0.8,
    background:"#616161",
    color: "#fff",
    fontSize:".9em"
}

const ProductView = props => (
    <div className="product-container">


        <div className="product-image">
            <img src={props.img}></img>
        </div>

        <div className={"product-buy " +  (props.canBuy ? "" : "disabled") }></div>

        <div className={"product-cost-to-buy " + (props.canBuy ? "" : "active") }>
            <Coins coins={"You need " + props.coinsTobuy} style={coinsStyles}/>
        </div>

        <div className={"product-buy-container " + (props.canBuy ? "" : "disabled") }>


            <span className="coints">
                <Coins coins={props.cost} style={customCoinsStyles} />
            </span>

            <button className="btn-buy" onClick={props.onClick}>
                Redeem now
            </button>

        </div>

        <div className="product-detail">
            <span className="product-category">{props.category} </span>
            <span className="product-title">{props.title}</span>
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

                    .product-buy{
                        position:absolute;
                        background-image:url('static/icons/buy-blue.svg');
                        background-size:100%;
                        background-position: center;
                        z-index:2;
                        top:11px;
                        right:13px;
                        height:42px;
                        width:42px;
                    }

                    .product-container:hover{
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    }

                    .product-container:hover .product-buy{
                        height:50px;
                        width:50px;
                        background-image:url('static/icons/buy-white.svg');
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

                    .product-buy-container{
                        position:absolute;
                        width:100%;
                        top:0;
                        left:0;
                        height:100%;
                        background:linear-gradient(-180deg, rgba(10, 212, 250, .8) 0%, rgba(37, 187, 241, .8) 100%);
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:flex-end;
                        padding:40px 0;
                        box-sizing:border-box;
                        opacity:0;
                        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                    }


                    .product-container:hover .product-buy-container{
                        opacity: 1;
                    }

                
                

                    .btn-buy{
                        background:#fff;
                        border-radius:100px;
                        padding: 10px 20%;
                        color:#616161;
                        font-size: 1.1em;
                        cursor:pointer;
                    }

                    .product-cost-to-buy{
                        position:absolute;
                        display:none;
                        right:13px;
                        top:11px;
                    }

                    .disabled{
                        display:none;
                    }

                    .active{
                        display:flex;
                    }
                
                
                
                `
            }

        </style>



    </div>
)

export default ProductView;