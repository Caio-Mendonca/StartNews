import  Head  from 'next/head';
import styles from './styles.module.scss'
import * as prismic from '@prismicio/client'
import client from '../../services/prismic';
export default function Post(){
    return (
        <>
            <Head>
                <title>Post | Start</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.postslist}>
                    <a href='#'>
                       <time> 16 de outubreo</time>
                       <strong>tem um titulo aqui</strong>
                       <p> testeetetet  et etet  etetet</p> 
                    </a>
                    <a>
                       <time> 16 de outubreo</time>
                       <strong>tem um titulo aqui</strong>
                       <p> testeetetet  et etet  etetet</p> 
                    </a>
                    <a>
                       <time> 16 de outubreo</time>
                       <strong>tem um titulo aqui</strong>
                       <p> testeetetet  et etet  etetet</p> 
                    </a>
                    <a>
                       <time> 16 de outubreo</time>
                       <strong>tem um titulo aqui</strong>
                       <p> testeetetet  et etet  etetet</p> 
                    </a>
                </div>
            </main>
        </>
    );
}

export async function getStaticProps(){

    const response = await client.get({
        predicates: prismic.predicate.at('document.type', 'post'),
        fetch:['post.title', 'post.body']
    })
    console.log(JSON.stringify(response, null, 2))
    return{
        props:{
            response: response
        }
    }
}


