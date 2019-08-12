
const NextPage = props => (
    <button className={"btn-next " + (props.disabled ? " disabled" : "")  }  disabled={props.disabled}  onClick={props.onClick}>

        <style jsx>
            {
                `
                
                    .btn-next{
                        background-image: url('static/icons/arrow-right.svg');
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

export default NextPage
