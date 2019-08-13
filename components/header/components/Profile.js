import Coins from "./Coins";

const profileStyles = {
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    justifyContent: "flex-end"
}

const profileNameStyles = {
    margin: "0 5px"
}

const Profile = props => (
   <div style={profileStyles}>
        <p style={profileNameStyles}> {props.name} </p>
        <Coins coins={props.coins}></Coins>
   </div>
)

export default Profile;