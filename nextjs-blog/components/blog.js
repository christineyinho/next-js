import Link from 'next/link'
import Date from '../components/date'

import utilStyles from '../styles/utils.module.css'

export const Blog = ({
    allPostsData
}) => (
    <section>
        <h2 id="blog" className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                <Date dateString={date} />
                </small>
            </li>
            ))}
        </ul>
    </section>
)