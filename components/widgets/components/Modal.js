const Modal = (props) => (
    <div className={"modal " + (props.hidden ? "hidden" : "")}>
        {props.children}

        <style jsx>

        {
                        `
                        
                        
                            .modal{
                                display:flex;
                                position:fixed;
                                width:100%;
                                height:100%;
                                top:0;
                                left:0;
                                background: rgba(0,0,0,.8);
                                justify-content:center;
                                align-items:center;
                                z-index:100;
                            }

                            .hidden{
                                display:none;
                            }
                        
                        `
                    }

        </style>
    </div>
)

export default Modal;