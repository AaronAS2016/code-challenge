import { device } from '../../../helpers/breakpoints'



export default class SortCointainer extends React.Component{

    state = {
        sortType: 'recent',
        visibility: false
    }


    toggleSort = () => {
        this.setState(prevState => ({
            visibility: !prevState.visibility
        }))

    }

    changeSortType = (name) => {
        this.setState({
            sortType: name
        })
    } 


    render(){

        const { visibility, sortType  } = this.state

        return (
            <div className="sort-container">

                <button className="btn btn-primary sort-button" onClick={this.toggleSort}>
                    Sort by 
                </button>

                <span className="sort-span">
                    Sort by:
                </span>

                <div className={"sort-types " + (visibility ? 'activeSort' : '')}>
                    <button className={"btn " + (sortType == 'recent' ? 'active' : '')} onClick={()=> this.changeSortType('recent')}>Most Recent</button>
                    <button className={"btn " + (sortType == 'lowest' ? 'active' : '')} onClick={()=> this.changeSortType('lowest')}>Lowest price</button>
                    <button className={"btn " + (sortType == 'highest' ? 'active' : '')} onClick={()=> this.changeSortType('highest')}>Highest price</button>
                </div>


                <style jsx>{
                    `
                    .sort-container{
                        position:relative;
                    }

                    .sort-span{
                        display:none;
                        margin: 0 5px;
                        font-size:1.3em;
                        color:#a3a3a3;
                        letter-spacing:-0.15px;
                        text-align:left;
                    }

                    .btn{
                        margin: 0 5px;
                        padding: 15px 20px;
                        width:150px;
                        border-radius:100px;
                        background:#ededed;
                        color:#a3a3a3;
                        transition: all .5s;
                        cursor: pointer;
                    }

                    .btn-primary,
                    .active{
                        color:#fff;
                        background:#0ad4fa;
                    }

                    .sort-types{
                        position: absolute;
                        display:none;
                        flex-direction: column;
                        transition: all .3s;
                        opacity:0;
                        z-index:2;
                    }

                    .sort-types .btn{
                        margin:2px 0;
                    }

                    .sort-button{
                        position:relative;
                    }

                    .sort-button:after{
                        content: " ";
                        position: absolute;
                        right: 25px;
                        top: 20%;
                        width: 14px;
                        height: 24px;
                        background-image: url(static/icons/sort-down.svg);
                        background-size: 100%;
                        background-position: center;
                    }

                    .activeSort{
                        animation: fadeIn .5s forwards;
                        display:flex;
                    }

                    @keyframes fadeIn{
                        from{
                            opacity:0;
                        }
                        to{
                            opacity:1;
                        }
                    }


                    @media ${device.tablet}{

                        .sort-container{
                            display:flex;
                            align-items:center;
                            margin: 0 20px;

                        }

                        .sort-button{
                            display:none;
                        }

                        .sort-span{
                            display:block;
                        }

                        .sort-types{
                            position: relative;
                            opacity: 1;
                            display:flex;
                            flex-direction: row;
                        }
                    
                    }

                
                
                
                `
                    
                    
                }

                </style>


            </div>
        )
    }
}