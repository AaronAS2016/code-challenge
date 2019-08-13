import Logo from './Logo';
import Profile from './Profile';

const Navbar = props => (
    <nav>
        
        <Logo src={props.logoSrc} alt={props.logoAlt} />
        <Profile  coins={props.coins} name={props.name}/>
        <style jsx>{
        `
            nav{
                width:100%;
                height:50px;
                box-sizing: border-box;
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

export default Navbar