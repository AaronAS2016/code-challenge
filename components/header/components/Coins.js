
const coinsStyles ={};
const Coins = props => (
    <div style={coinsStyles}>
        {props.coins}
        <style jsx>
        {
            `


                div{
                    position:relative;
                    background: gray;
                }

                div:after{
                    content: " ";
                    width:40px;
                    height:40px;
                    position:absolute;
                    right:10px;
                    top:0;
                    background-image: url("static/icons/coin.svg");
                    background-position: center;
                    background-size:100%;
                    background-repeat: no-repeat;
 
                }
            
            
            `
        }
        </style>
    </div>
)

export default Coins;