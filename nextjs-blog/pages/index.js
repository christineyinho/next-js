import Head from 'next/head'

import { Blog } from "../components/blog";
import Layout, { siteTitle } from '../components/layout'
import { StickyNav } from '../components/stickyNav';
import { WorkInformation } from '../components/workInformation';
import { Contact } from "../components/contact";

import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({
  allPostsData
}) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className={utilStyles.section}>
      <StickyNav />
    </div>
    <div className={utilStyles.section} id="about">
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.homeHeader}>Hi &#128075; I'm <span className={utilStyles.name}>Christine</span>. I'm currently a Sydney based Front End Engineer, moving to London, United Kingdom in 2022.</h1>
        <h3 className={utilStyles.subHeader}>Specialising in building UI designs and experiences. Currently at <a href="https://chuffed.org">Chuffed.org</a></h3>
        <p className={utilStyles.headerText}>A sociology graduate turned front end engineer with 5+ years experience in the Front End space.
          I found my time at University being spent more on figuring out how websites were made than reading Karl Marx, which has led me down this path!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <WorkInformation />
        <Blog allPostsData={allPostsData} />
        <Contact />
      </section>
    </div>
  </Layout>
);

export default Home;