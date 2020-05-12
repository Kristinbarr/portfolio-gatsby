import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import Headshot from "../components/Headshot"

// breakpoints = [576, 768, 992, 1200]

const PageTitle = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
  @media (max-width: 576px) {
    margin: 1.65rem 0 1.85rem 0;
    text-align: center;
  }
`
const StyledAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // background: pink;
  width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    align-items: center;
  }
`
const StyledWrapperLeft = styled.div`
  width: 60%;
  margin-right: 20%;
  margin-bottom: 10%;
  @media (max-width: 992px) {
    font-size: 0.85rem;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-right: 0;
  }
  @media (max-width: 576px) {
    min-height: 0;
    margin-bottom: 1rem;
    text-align: justify;
  }
`
const StyledWrapperRight = styled.div`
  align-self: flex-end;
  width: 20%;
  // margin-top: 10%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotate(-5deg);
  }
  @media (max-width: 768px) {
    // margin: auto;
    align-self: flex-end;
  }
  @media (max-width: 576px) {
    margin: 1rem 0 2rem 0;
  }
`

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <PageTitle>About</PageTitle>
      <StyledAboutWrapper>
        <StyledWrapperLeft>
          <SEO title="About" />
          <h3>Hello! I'm Kristin.</h3>
          <br />
          <p>
            I'm a web developer based in NYC with a passion for making beautiful
            apps. I have experience designing and developing user interfaces,
            testing and debugging. I'm also an expert with a variety of
            development and imaging software, interfacing with remote teams and
            enterprise clientele, and team member onboarding. I'm eager to power
            projects from concept to completion through teamwork, problem
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
