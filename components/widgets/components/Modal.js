const Modal = (props) => (
    <div className="modal ">
        {props.children}

        <style jsx>

        {
                        `
                        
                        
                            .modal{
                                display:none;
                                position:fixed;
                                width:100%;
                                height:100%;
                                top:0;
                                left:0;
                                background: rgba(9,0,0,.8);
                                
                                justify-content:center;
                                align-items:center;
                                z-index:100;
                            }
                        
                        `
                    }

        </style>
    </div>
)

export default Modal;