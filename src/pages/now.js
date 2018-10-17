import React from 'react'

import Layout from '../components/layout'
import CurrentNow from '../components/now-current'
import NowList from '../components/now-list'
import Header from '../components/sections/header'

import Styles from '../components/now.module.scss'

const NowPage = ({data}) => (
  <Layout>
    <Header />

    <div className={Styles.intro}>
      <h2>The Now Page</h2>
      <p>I recently read about something called <a href="https://sivers.org/nowff" target="_blank">The Now Movement</a>, and decided I should create a /now page. For the moment, my updates are organized into three categories: Work, Personal Projects, and Life.</p>
    </div>
    
    <CurrentNow />
    <NowList />
    
  </Layout>
)

export default NowPage

