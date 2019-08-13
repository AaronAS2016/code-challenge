import Loader from "./Loader";
import { device } from '../../../helpers/breakpoints'
 
const ModalRedeem = (props) => (
    <div className={"modal-container "}>

        {!props.success ? (

                <div className="modal-loader-container">

                    <div className="modal-title">
                        We are redeem your {props.title}
                    </div>

                    <Loader visibility={!props.success}></Loader>

                </div>
        ): (
            <div className="modal-success-container">
                <div className="modal-check-success">

                    <img src="static/icons/checked.svg" alt="Success!"></img>
                </div>
                <div className="modal-title"> {props.title} redeemed!</div>
                <div className="modal-buttons">
                    <button className="btn-success" onClick={props.onClick}>Accept</button>
                </div>
            </div>
        )
        

        }


   <style jsx>
    {
    `
        
        
        .modal-container{
            width:100%;
            height:100vh;
            display:flex;
            padding:10px;
            border-radius:20px;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            flex-direction:column;
            justify-content:center;
            align-items:center;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }

        .hidden{
            display:none;
        }

        .modal-loader-container,
        .modal-success-container{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        .modal-success-container{
            animation: fadeIn .5s forwards;
        }

        .modal-image{
            width:100%;
        }

        .modal-title{
            font-size: 1.3em;
            margin: 20px;
            padding: 20px 0;
            opacity: 0;
            animation: fadeIn .5s forwards;
            text-align:center;
            font-weight:300;
            letter-spacing:.3px;
        }

        .modal-image img {
            max-width:100%;
        }



        .modal-check-success{
            width:100%;
        }

        .modal-check-success img{
            max-width:60%;
            margin:0 20%;
        }

        


        .btn-success{
            background: rgba(10, 212, 250, 1);
            padding:15px 50px;
            color:#fff;
            border-radius:50px;
        }

        @media ${device.tablet}{
            .modal-container{
                width:30%;
                height:50vh;
            }

            .modal-check-success img{
                max-width:40%;
                margin:0 30%;
            }

        }

        @keyframes fadeIn{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }

        
    `
    }
    </style>
      


    </div>
)

export default ModalRedeem