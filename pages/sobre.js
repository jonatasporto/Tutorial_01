import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({autor}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aprendendo Next!!!!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Pagina desenvolvida com o intuito de aprender next js.
        </h1>
        <Link href="/">Ir para página principal</Link>

                
         
                <a  href={`https://www.instagram.com/jonatas.porto/`}> Contato com o autor!
                </a>            
        
          aula ministrada pelo professor Bonieky Lacerda no 
          <a  href={`https://www.youtube.com/watch?v=xjrDEZQ5LnA&t=4812s`}> youtube!
          </a> 
          <hr/>Autor: {autor}
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  
  /*  const resposta = await fetch('http://localhost:3000/api/trending');
  const json = await resposta.json();
*/
  return{
    props: {
        autor: 'Jônatas Porto'
    }
  };
}
