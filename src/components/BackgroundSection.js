import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import Footer from "./Footer"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 12rem);
  margin: 0 auto;
`

const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "BG.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid

  console.log("imgData in BGsection", imageData)
  console.log("children in BGsection: :", children)

  return (
    <Container>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
        <Footer children={children} />
      </BackgroundImage>
    </Container>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: left center;
  background-repeat: repeat-y;
  background-size: cover;
  background-color: transparent;

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
