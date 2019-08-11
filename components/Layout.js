import { Link } from '../routes/'
import Head from 'next/head'
import Header from './header/components/Header';

export class Layout extends React.Component{
    render(){

        const { children , title } = this.props;

        return( 
        <div>

            <Head> 
                <title> { title } </title> 
                <meta name="viewport" content="width=device-width"/>
            </Head>

        
            <Header/>

            
            { children }


            <footer> Footer  </footer>

            <style jsx global>{
                `
                    body{
                        margin:0;
                        padding:0;
                        font-family: Roboto;
                    }
                `
            }
            </style>

        </div>
        )
    }
}