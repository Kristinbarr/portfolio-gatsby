import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"

const H3 = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`

const CV = () => (
  <Layout>
    <StyledBackgroundSection>
      <SEO title="CV" />
      <H3>CV</H3>

      <p>Kristin Barr CV</p>
    </StyledBackgroundSection>
  </Layout>
)

export default CV
