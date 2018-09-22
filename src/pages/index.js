import React from 'react'
// import { Link } from 'gatsby'
import horse from './../images/bay-horse-eating-hay.jpg'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hay there!</h1>
    <img src={horse} alt="Horse eating hay."></img>
    <h4>My name is Tyler Vick.</h4>
    <p>I am a web developer in Columbus, OH with an engineering background.  I build websites and web applications for local businesses.</p>
    <p>I am enjoying the JAMstack architecture, and am looking to learn more about:</p>
    <ul>
      <li>Serverless data storage (Database services with APIs?)</li>
      <li>SSGs other than Jekyll</li>
      <li>Getting clients to trust non-Wordpress CMSs</li>
      <li>Current tools people use in the build/generate process.</li>
      <li>Building e-commerce sites with JAM.</li>
      <li>Typical deliverables to clients.</li>
    </ul>
    <h4>Check out my site: <a href="https://www.tjvick.com">tjvick.com</a></h4>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
