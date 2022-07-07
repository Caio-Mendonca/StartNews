import { SigninButton } from '../SigninButton'
import styles from './style.module.scss'

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img 
                src="/images/STARTlogo.png" 
                alt="Logo start criacao e desenvolvimento"
                />
                <nav>
                    <a className= {styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SigninButton/>
            </div>
        </header>
    )
}