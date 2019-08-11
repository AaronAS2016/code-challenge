
const logoStyles = {
    width: "30px",
    margin: '5px'
}

const Logo = props => (
    <img src={props.src} alt={props.alt} style={logoStyles}  />
)

export default Logo;