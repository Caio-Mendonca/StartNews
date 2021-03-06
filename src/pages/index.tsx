import Head from 'next/head'
import { DiscordButton } from '../components/DiscordButton'
import styles from './home.module.scss'
export default function Home() {
  return (
    <>      
      <Head>
        <title>Start Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 
            <img 
            src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif" 
            width="20px" 
            height="20px"
            alt='icone de mao dando boas vindas'>
            </img> 
            Olá, Bem-Vindo(a)
          </span>
            <h1>
              Os melhores conteúdos sobre<br/> 
              <span>PROGRAMAÇÃO</span>
            </h1>
            <DiscordButton/>

        </section>
        <img className={styles.image}src='/images/startgif.gif' alt='imagem de foguete com logo da empresa'/>
      </main>
      <footer className={styles.footerStyle}>
        <h1>Powerd By</h1>
        <img        
        src="/images/STARTlogo.png" 
        alt="Logo start criacao e desenvolvimento"/>
      </footer>
    </>
  )
}
