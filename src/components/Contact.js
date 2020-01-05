import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: #4f4f4f;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    filter: invert(33%) sepia(92%) saturate(2700%) hue-rotate(238deg)
      brightness(101%) contrast(90%);
  }
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
    // text-shadow: 0 -15px 20px #000;
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
  // console.log("links", links)
  return (
    <ContactContainer>
      {links.map(({ node: link }) => {
        const title = link.title
        const url = link.url
        const imageData = link.image.childImageSharp.fluid
        return (
          <StyledLink href={url} key={title}>
            <StyledImage fluid={imageData} />
            <Title>{title}</Title>
          </StyledLink>
        )
      })}
    </ContactContainer>
  )
}

export default Contact
