import 'isomorphic-fetch';
import Navbar from "../components/Navbar";

export class NavbarContainer extends React.Component{

    static async getInitialProps({ res }) {
        try{
            let headers = new Headers({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRjOTUyYTRkYTA0YTAwNmM4NzA2NTYiLCJpYXQiOjE1NjUzMDAwMTF9.SGeyJlHNoVu_GBrzw74TozqDbMGXM1oA_kW9CuqcqfE',
            })
            let miInit = { method: 'GET',
                           headers,
                           mode: 'cors',
                           cache: 'default' };
            let req = await fetch('https://coding-challenge-api.aerolab.co/user/me', miInit)
            let body = await req.json()
            return { body, statusCode: 200}
        }catch(e){
            res.statusCode = 503;
            return { body: e, statusCode: 503 }
        }

    }

    render(){

        const { body } = this.props


        return (
            <Navbar logoSrc="static/aerolab-logo.svg" logoAlt="Aerolab" coins="5000" name="Aaron"></Navbar>   
        )
    }



}