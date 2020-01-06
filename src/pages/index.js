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
  @media (max-width: 576px) {
    align-items: center;
    flex-direction: column;
  }
`
const StyledWrapperLeft = styled.div`
  width: 40%;
  min-height: calc(100vh - 290px);
  @media (max-width: 992px) {
    font-size: .85rem;
  }
  @media (max-width: 576px) {
    min-height: 0;
    margin-bottom: 1rem;
    width: 80%;
    text-align: justify;
    // text-justify: inter-character;
  }
`
const StyledWrapperRight = styled.div`
  width: 25vw;
  margin: 20% 0 5rem 5%;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: rotate(-5deg);
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
          <p>
            I’m a web developer based in NYC with experience designing and
            developing user interfaces, testing and debugging. Expert with a
            variety of development and imaging software, interfacing with remote
            teams and enterprise clients, and team member on-boarding. Eager to
            power projects from concept to completion through teamwork, problem
            solving and thoughtful design.
          </p>
          <p>

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
