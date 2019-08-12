import Coins from "../../header/components/Coins";

const ModalRedeem = (props) => (
    <div className="modal-container">


        <div>
            You will buy {props.title}
        </div>

        <Coins coins={props.cost}>

        </Coins>

        <div className="modal-image">
            <img src={props.img} alt={props.title} />
        </div>
        

   <style jsx>
    {
    `
        
        
        .modal-container{
            width:90%;
            height:80vh;
            display:flex;
            padding:10px;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            flex-direction:column;
            justify-content:center;
            align-items:center;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }

        .modal-image{
            width:100%;
        }

        .modal-image img {
            max-width:100%;
        }
        
    `
    }
    </style>
      


    </div>
)

export default ModalRedeem