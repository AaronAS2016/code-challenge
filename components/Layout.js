import { Link } from '../routes/'
import Head from 'next/head'
import Header from './header/components/Header';
import Footer from './footer/components/Footer';

export class Layout extends React.Component{
    render(){

        const { children , title } = this.props;

        return( 
        <div>

            <Head> 
                <title> { title } </title> 
                <meta name="viewport" content="width=device-width"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="title" content="Aerolab Challenge!"/>
                <meta name="description" content="The challenge is to build a catalog view for a loyalty program app"/>
                <link rel="icon" type="image/svg+xml" href="static/aerolab-logo.svg"></link>
            </Head>

        
            <Header/>

            
            { children }


            <Footer></Footer>

            <style jsx global>{
                `

                    body{
                        margin:0;
                        padding:0;
                        font-family: Roboto;
                        background: #f9f9f9;
                    }

                    button{

                        border: none;
                        margin: 0;
                        padding: 0;
                        width: auto;
                        overflow: visible;
                        background: transparent;
                        color: inherit;
                        font: inherit;
                        line-height: normal;
                        outline: 0;

                        -webkit-font-smoothing: inherit;
                        -moz-osx-font-smoothing: inherit;
                        -webkit-appearance: none;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);

                    }

                    button::-moz-focus-inner  {
                        border: 0;
                        padding: 0;
                    }

                    button:focus {outline:0;}
                `
            }
            </style>

        </div>
        )
    }
}