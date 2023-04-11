import Head from 'next/head'
import { NextPage } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import homeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LEE SOMANG</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[LEE SOMANG Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>

        </ul>
      </section>
    </div>
  )
}

export default Home;