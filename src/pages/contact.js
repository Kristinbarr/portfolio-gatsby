import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"

const H3 = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`

const Contact = () => (
  <Layout>
    <StyledBackgroundSection>
      <SEO title="Contact" />
      <H3>Contact</H3>
      <p>Welcome to the contact page</p>
      <p>Get in touch</p>
    </StyledBackgroundSection>
  </Layout>
)

export default Contact
