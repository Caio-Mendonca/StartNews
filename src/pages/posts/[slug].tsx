import client from '../../services/prismic';
import {  RichText } from 'prismic-dom'
import Head from 'next/head';
import styles from './post.module.scss'

interface PostsProps{
    post: {
        slug: string;
        title: string;
        content: string;
        updateAt: string;
    }
}
export  default function Post({post}: PostsProps){

    return(
        <>
            <Head>
                <title>{post.title} | START</title>
            </Head>
            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                    <div 
                    className={styles.postContent}
                    dangerouslySetInnerHTML={{ __html:post.content}}/>
                </article>
            </main>
        </>
    )

}
export async function getServerSideProps({params}){
    const { slug } = params
    const response = await client.getByUID('post', String(slug), {})

    const post = {
            slug, 
            title: RichText.asText(response.data.title),
            content: RichText.asHtml(response.data.body),
            updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    return{
        props:{
            post
        }
    }
}