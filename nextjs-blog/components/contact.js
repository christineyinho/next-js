import Image from 'next/image'

import styles from "./contact.module.css";

export const Contact = () => (
    <section className={styles.container} id="contact">
        <ul className={styles.listContainer}>
            <li className={styles.list}>
                <a href="https://github.com/christineyinho">
                    <Image
                        priority
                        src="/images/github.png"
                        height={20}
                        width={20}
                        alt="github icon"
                    />
                </a>
            </li>
            <li className={styles.list}>
                <a href="https://twitter.com/christineyinho">
                    <Image
                        priority
                        src="/images/twitter.png"
                        height={20}
                        width={20}
                        alt="twitter icon"
                    />
                </a>
            </li>
            <li className={styles.list}>
                <a href="https://www.linkedin.com/in/christineyinho">
                    <Image
                        priority
                        src="/images/linkedin.png"
                        height={20}
                        width={20}
                        alt="linkedin icon"
                    />
                </a>
            </li>
            <li className={styles.list}>
                <a href="mailto:christineyinho@gmail.com">
                    <Image
                        priority
                        src="/images/email.png"
                        height={20}
                        width={20}
                        alt="email icon"
                    />
                </a>
            </li>
        </ul>
    </section>
)