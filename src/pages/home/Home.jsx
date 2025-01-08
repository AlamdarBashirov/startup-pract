import React from 'react'
import Layout from '../../components/layout/Layout'
import IntroSection from './sections/introSection/IntroSection'
import DummySection from './sections/dummySection/DummySection'

const Home = () => {
  return (
    <Layout>
        <IntroSection/>
        <DummySection/>
    </Layout>
  )
}

export default Home