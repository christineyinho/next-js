import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import { Header } from './header';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Christine Yin Ho'
export const siteTitle = 'Christine Yin Ho Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Christine Yin Ho Portfolio"
        />
        <meta
          property="og:image"
          content=""
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/christineyinho-github.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={styles.mainContainer}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
};