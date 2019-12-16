import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Page" />
      <h1>About</h1>
      <p>
        Minim id cillum veniam mollit. Do in in mollit cillum et aliqua. Esse
        adipisicing sint dolor anim consectetur consectetur enim officia qui
        commodo consectetur exercitation commodo sint.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default AboutPage
