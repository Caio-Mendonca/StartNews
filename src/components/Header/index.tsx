import { SigninButton } from '../SigninButton'
import styles from './style.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
export function Header(){
    const { asPath } = useRouter()
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <img 
                    className={styles.imageLogo}
                    src="/images/STARTlogo.png" 
                    alt="Logo start criacao e desenvolvimento"
                    />
                </Link>
                <nav>
                    <Link href='/'>
                        <a className={ asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    <Link href='/posts'>
                        <a className={ asPath === '/posts' ? styles.active : ''}>Posts</a>
                    </Link>
                </nav>

                {/* <SigninButton/> */}
            </div>
        </header>
    )
}