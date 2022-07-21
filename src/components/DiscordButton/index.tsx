import { FaDiscord } from 'react-icons/fa'
import styles from './style.module.scss'
export function DiscordButton(){
    return (
        <button
        type="button"
        className={styles.discordButton}
        >
           <a href='https://discord.gg/V3X8XRN2' target='_blank' rel='noreferrer'>
            Acesse nosso canal no 
            </a> <FaDiscord/>
        </button>
    )
}