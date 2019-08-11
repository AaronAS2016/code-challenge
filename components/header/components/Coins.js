
const coinsStyles ={};

const Coins = props => (
    <div className="coins-container" style={coinsStyles}>
        <span className="coins-counter">{props.coins}</span>
        <div className="coin"></div>
        <style jsx>
        {
            `


                .coins-container{
                    background:#ededed;
                    border-radius:100px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    padding:5px 10px;
                    flex-direction: row;    
                }

          
                .coin{
                    width:30px;
                    height:30px;
                    background-image: url("static/icons/coin.svg");
                    margin: 1px 3px;
 
                }
            
            
            `
        }
        </style>
    </div>
)

export default Coins;