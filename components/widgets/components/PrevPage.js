const PrevPage = props => (
    <button className={"btn-pre" + (props.disabled ? " disabled "  : " ")} aria-label="Back" disabled={props.disabled} onClick={props.onClick}>
        <style jsx>
            {
                `
                
                    .btn-pre{
                        background-image: url('static/icons/arrow-left.svg');
                        width:46px;
                        height:46px;
                        background-size:100%;
                        background-position: center;
                        cursor:pointer;
                    }

                    .hidden{
                        display: none;
                    }

                    .disabled{
                        cursor : not-allowed ;
                    }
                
                `
            }

        </style>
    </button>
)

export default PrevPage
