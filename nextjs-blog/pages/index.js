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
        <p>Hi &#128075; I'm Christine. Currently a Front End Engineer at <a href="https://chuffed.org">Chuffed.org</a>. A keen foodie, book worm, walker and interest in fashion.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis libero purus, volutpat imperdiet aliquam ac, vulputate sit amet ex.
          Integer ac eleifend nibh, id rhoncus nibh.
          Cras nisl purus, lacinia a consequat ut, tristique pellentesque dui.
          Sed at pharetra diam. Sed ultrices odio a nisi blandit, nec luctus felis pharetra.
          Sed congue maximus velit et pretium.
          Ed dui diam, volutpat nec ante non, tempus laoreet purus.
          Donec lacinia volutpat sapien, sed pretium nibh volutpat vel.
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