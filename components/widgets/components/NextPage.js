const NextPage = props => (
    <div className="btn-next" onClick={props.onClick}>

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
                
                `
            }

        </style>
    </div>
)

export default NextPage
