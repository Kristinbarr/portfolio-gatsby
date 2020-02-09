import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Image from "gatsby-image"

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;
  width: 80%;
  @media (max-width: 576px) {
    width: 100%;
  }
`
const StyledLink = styled.a`
  text-decoration: none;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    transform: translate(0, -3px);
  }
`
const InnerStyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: #4f4f4f;
  &:hover {
    filter: invert(33%) sepia(92%) saturate(2700%) hue-rotate(238deg)
      brightness(101%) contrast(90%);
    text-decoration: underline;
  }
`
const Title = styled.h6`
  padding-top: 0.25rem;
`
const StyledImage = styled(Image)`
  width: 1rem;
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
                fluid(quality: 100, maxHeight: 40) {
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
  return (
    <ContactContainer>
      {links.map(({ node: link }) => {
        const title = link.title
        const url = link.url
        const imageData = link.image.childImageSharp.fluid
        return (
          <StyledLink href={url} key={title}>
            <InnerStyledLink>
              <StyledImage fluid={imageData} />
              <Title>{title}</Title>
            </InnerStyledLink>
          </StyledLink>
        )
      })}
    </ContactContainer>
  )
}

export default Contact
