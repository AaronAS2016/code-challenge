import fetch from 'isomorphic-fetch';
import Navbar from "../components/Navbar";

export class NavbarContainer extends React.Component{


    state = {
        name: "",
        coins: ""
    }

    componentDidMount(){
        this.fetchDataProfile()
    }

    
    fetchDataProfile = () => {

        let headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
        }
        let miInit = { method: 'GET',
                        headers,
                        mode: 'cors',
                        cache: 'default' };
        fetch('https://coding-challenge-api.aerolab.co/user/me', miInit)
            .then(req => req.json())
            .then(body => {
                this.setState({
                    name : body.name,
                    coins : body.points
                })

            })
    }

    render(){

        const { name, coins} = this.state

        return (
            <Navbar logoSrc="static/aerolab-logo.svg" logoAlt="Aerolab" coins={coins} name={name}></Navbar>   
        )
    }



}