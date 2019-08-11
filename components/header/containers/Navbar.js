import Logo from "../components/Logo";
import Profile from "../components/Profile";

export class Navbar extends React.Component{

    render(){
        return (
            <nav>
                <Logo src="static/aerolab-logo.svg" alt="Aerolab" />
                <Profile />
                <style jsx>{
                `

                nav{
                    width:100%;
                    height:50px;
                    background: #fff;
                    display:flex;
                    align-items:center;
                    justify-content: space-between;
                    padding: 0 15px;
                }

                
                `    
                    
                }

                </style>
            </nav>
        )
    }



}