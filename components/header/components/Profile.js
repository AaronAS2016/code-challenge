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
       <p style={profileNameStyles}> Jonh Kite </p>

        <Coins coins="5000"></Coins>


   </div>
)

export default Profile;