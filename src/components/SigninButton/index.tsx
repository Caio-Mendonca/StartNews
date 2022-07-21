import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession }  from 'next-auth/react'
import styles from './style.module.scss'

export function SigninButton(){
    const { data: session } = useSession()
    
    return session ? (
        <button 
        type="button" 
        className={styles.signinButton}
        onClick={()=> signOut()}>
            <FaGithub color='#04d361'/>
            <h4 className={styles.userName}>{session.user.name}</h4>
            <FiX color ='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button" 
        onClick={() => signIn('github')}
        className={styles.signinButton}>
            <FaGithub color='#ff9900'/>
            <h4 className={styles.userName}> Login com o Github</h4>
        </button>
    )
}