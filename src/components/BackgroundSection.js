import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import Footer from "./Footer"

const BgInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: calc(100vh - 72px);
  @media (max-width: 768px) {
    min-height: calc(100vh - 82px)
  }
  @media (max-width: 576px) {
    min-height: calc(100vh - 123px)
  }
  margin: 0 auto;
`

const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "BG.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid

  return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        <BgInnerContainer>
          {children}
          <Footer children={children} />
        </BgInnerContainer>
      </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  // min-height: calc(100vh - 72px);
  // min-height: calc(100vh - 82px);
  // background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  background-color: transparent;
  overflow: hidden;

  // @media (max-width: 768px) {
  //   min-height: calc(100vh - 90px)
  // }

  // These three crucial styles (if existing) are directly parsed and added to
  // the pseudo-elements without further ado (except when overwritten).

  // With media-queries you have to overwrite the default options (see style={{}} above).
  //  media.lessThan("large")
  //   background-size: cover;
  //   &:after, &:before {
  //     background-size: contain;
  //   }
  // }

  // For pseudo-elements you have to overwrite the default options (see style={{}} above).
  // See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles
  //&:after, &:before {
  //   background-clip: content-box;
  //   background-size: contain;
  //}
`

export default StyledBackgroundSection
