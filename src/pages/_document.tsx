import Document, {Html, Head, Main, NextScript} from "next/document"
import loader from '../styles/loader'
export default class MyDocument extends Document  {
    render(){
        return (
            <Html lang="pt-br">
                <Head>
                    <style>{loader}</style>
                    <meta name='description' content='Start Criação e Desenvolvimento'/>

                    <link rel="icon" type="image" href="/images/rocketstart.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />                   
                </Head>
                <body>
                    <div id={'globalLoader'}>
                        <div className="loader">
                            <div/>
                            <div/>
                        </div>
                    </div>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}