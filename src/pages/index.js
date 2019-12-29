import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import Headshot from "../components/Headshot"

const StyledAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledWrapperLeft = styled.div`
  width: 40vw;
  margin-bottom: 40vh;
  font-size: .9rem;
`
const StyledWrapperRight = styled.div`
  width: 25vw;
  margin: 30vh 0 5rem 5vw;
  &:hover {
    transform: rotate(-5deg);
  }
  transition: all 0.3s ease-in-out 0s;
  margin-top: 20%;
`
const H3 = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <H3>About</H3>
      <StyledAboutWrapper>
        <StyledWrapperLeft>
          <SEO title="About" />
          <p>
            I’m a web developer based in NYC with experience designing and
            developing user interfaces, testing and debugging. Expert with a
            variety of development and imaging software, interfacing with remote
            teams and enterprise clients, and team member on-boarding. Eager to
            power projects from concept to completion through teamwork, problem
            solving and thoughtful design.
          </p>
        </StyledWrapperLeft>
        <StyledWrapperRight>
          <Headshot />
        </StyledWrapperRight>
      </StyledAboutWrapper>
    </StyledBackgroundSection>
  </Layout>
)

export default IndexPage
