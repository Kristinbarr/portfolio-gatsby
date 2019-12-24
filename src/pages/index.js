import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Headshot from "../components/headshot"
import SEO from "../components/seo"

import { container } from "../styles/mainStyles"


const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>About</h1>
    <p>
      I’m a web developer based in NYC with experience designing and developing
      user interfaces, testing and debugging. Expert with a variety of
      development and imaging software, interfacing with remote teams and
      enterprise clients, and team member on-boarding. Eager to power projects
      from concept to completion through teamwork, problem solving and
      thoughtful design.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Headshot />
    </div>
    <Link to="/about">About page</Link>
  </Layout>
)

export default AboutPage
