import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './style.module.scss'

export function SigninButton(){
    const isUserLoggedIn = true

    return isUserLoggedIn ? (
        <button 
        type="button" 
        className={styles.signinButton}>
            <FaGithub color='#04d361'/>
            <h4 className={styles.userName}>Caio Mendonca</h4>
            <FiX color ='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button" 
        className={styles.signinButton}>
            <FaGithub color='#ff9900'/>
            Login com o Github
        </button>
    )
}