import Image from 'next/image'
import styles from './header.module.css'

export const Header = () => (
    <div className={styles.container}>
        <Image
            priority
            src="/images/christineyinho-github.jpeg"
            className={styles.borderCircle}
            height={60}
            width={60}
            alt="header icon"
        />
        <p className={styles.text}><a href="mailto:christineyinho@gmail.com">christineyinho@gmail.com</a></p>
    </div>
)