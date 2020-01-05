import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 1rem;
  margin-bottom: 2rem;
  background: #fff;
  border: 2px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    box-shadow: 8px 8px 0px #b24af2;
  }
`
const StyledWrapperLeft = styled.div`
  width: 20rem;
  margin: 1rem 1rem 1rem 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out 0s;
  &:hover:after {
    // box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    // transform: scale(1.025, 1.025);
    // background: rgba(0,0,0, .7);
    // z-index: 5;
    // content: "Go to live site";
  }
`
const StyledWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`
const StyledImage = styled(Image)`
  &:hover:after {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    // transform: scale(1.025, 1.025);
    // background: rgba(0, 0, 0, 0.7);
    // z-index: 5;
    // content: "Go to live site";
  }
`
const HGroup = styled.hgroup`
  display: flex;
  // flex-direction: column;
`
const H4 = styled.h4``
const H5 = styled.h5``
const H6 = styled.h6`
  color: #aaa;
  margin-bottom: 0.65rem;
`
const ProjectLinkIcons = styled.div``
const ProjectLink = styled.a`
  padding-left: 1rem;
  color: #4f4f4f;
  text-decoration: none;
`
const Li = styled.li`
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`

const ProjectPreview = ({
  title,
  slug,
  description,
  url_live,
  url_code,
  date,
  details,
  imageData,
}) => {
  const data = useStaticQuery(graphql`
    {
      imageSharp(original: { src: { regex: "/external-link/" } }) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <ProjectContainer>
      <StyledWrapperLeft>
        <Link to={`${url_live}`}>
          <StyledImage fluid={imageData} alt={title} />
        </Link>
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <HGroup>
          <div>
            <H4>{title}</H4>
            <H5>{description}</H5>
            <H6>{date}</H6>
          </div>
          <ProjectLinkIcons>
            <ProjectLink href={url_live}>live</ProjectLink>
            <ProjectLink href={url_code}>code</ProjectLink>
          </ProjectLinkIcons>
        </HGroup>
        <ul>
          {details.map(detail => (
            <Li>{detail}</Li>
          ))}
        </ul>
      </StyledWrapperRight>
    </ProjectContainer>
  )
}

export default ProjectPreview
