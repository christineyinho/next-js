import styles from "./stickyNav.module.css"

export const StickyNav = () => (
    <section className={styles.container}>
        <ul className={styles.listContainer}>
            <li><a href="#about">about</a></li>
            <li><a href="#work">work</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </section>
)