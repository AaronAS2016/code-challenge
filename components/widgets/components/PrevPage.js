const PrevPage = props => (
    <div className="btn-pre" onClick={props.onClick}>

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
                
                `
            }

        </style>
    </div>
)

export default PrevPage
