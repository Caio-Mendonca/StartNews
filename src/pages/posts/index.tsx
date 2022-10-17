import  Head  from 'next/head';
import styles from './styles.module.scss'
import * as prismic from '@prismicio/client'
import client from '../../services/prismic';
import {  RichText } from 'prismic-dom'
import Link from 'next/link';
type Posts = {
    slug: string;
    title: string;
    excerpt: string;
    updateAt: string;
}
interface PostsProps{
    posts: Posts[]
}
export default function Post({posts}: PostsProps){
    return (
        <>
            <Head>
                <title>Post | Start</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.postslist}>
                    {posts.map(post =>(
                        <Link href={`/posts/${post.slug}`} key={post.slug}>
                            <a>
                                <time>{post.updateAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p> 
                            </a>
                        </Link>
                    ))}
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
    const posts = response.results.map(post=>{
        return{
            slug:post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.body.find(body => body.type === 'paragraph')?.text ?? '',
            updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return{
        props:{
            posts
        }
    }
}
