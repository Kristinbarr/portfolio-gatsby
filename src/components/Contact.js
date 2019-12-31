import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

import Image from "gatsby-image"

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  &:hover {
    filter: invert(33%) sepia(92%) saturate(2693%) hue-rotate(258deg)
      brightness(101%) contrast(90%);
  }
`
const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #4f4f4f;
  &:hover {
    text-shadow: 0 -15px 20px #000;
  }
`
const Title = styled.div`
  padding-top: 0.25rem;
`
const StyledImage = styled(Image)`
  min-width: 1rem;
  text-align: center;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allContactJson {
        edges {
          node {
            title
            url
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const links = data.allContactJson.edges
  console.log("links", links)
  return (
    <ContactContainer>
      {links.map(({ node: link }) => {
        const title = link.title
        const url = link.url
        const imageData = link.image.childImageSharp.fluid
        return (
          <StyledLink to={url}>
          <LinkWrapper>
            <StyledImage fluid={imageData} />
            <Title>{title}</Title>
          </LinkWrapper>
          </StyledLink>
        )
      })}
    </ContactContainer>
  )
}

export default Contact
