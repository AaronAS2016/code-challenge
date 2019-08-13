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
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta key="title" content="Aerolab Challenge!"/>
                <meta name="Description" content="The challenge is to build a catalog view for a loyalty program app"/>
                <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png"/>

                <link name="apple-mobile-web-app-title" content="Aerolab"/>
                <link name="apple-mobile-web-app-capable" content="yes"/>
                <link name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

                <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png"/>
                <link rel="manifest" href="static/site.webmanifest"/>
                <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
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