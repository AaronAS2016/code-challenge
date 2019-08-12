import Loader from "./Loader";

const ModalRedeem = (props) => (
    <div className="modal-container">


        <div className="modal-title">
            We are redeem your {props.title}
        </div>

        <Loader>

        </Loader>
        

   <style jsx>
    {
    `
        
        
        .modal-container{
            width:80%;
            height:50vh;
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

        .modal-title{
            font-size: 1.3em;
            margin: 20px;
            padding: 20px 0;
            text-align:center;
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