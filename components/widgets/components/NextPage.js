
const NextPage = props => (
    <div className={"btn-next " + (props.disabled ? "hidden" : " " ) } onClick={props.onClick}>

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
                
                `
            }

        </style>
    </div>
)

export default NextPage
