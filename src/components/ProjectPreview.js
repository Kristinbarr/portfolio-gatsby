import React from "react"
import { useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

// breakpoints = [576, 768, 992, 1200]

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
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`
const StyledWrapperLeft = styled.div`
  width: 23rem;
  margin: 1rem 1rem 1rem 0.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out 0s;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const StyledWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0.25rem 0 0.85rem;
  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 90%;
  }
`
const StyledImage = styled(Image)`
`
const HGroup = styled.hgroup`
  display: flex;
  justify-content: space-between;
`
const H4 = styled.h4``
const H5 = styled.h5``
const H6 = styled.h6`
  color: #999;
  margin-bottom: 0.65rem;
  text-decoration: none;
`
const IconLinkWrapper = styled.div`
  display: flex;
`
const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0.5rem;
  text-decoration: none;
`
const StyledIcon = styled.img`
  max-width: 1.15rem;
  margin-bottom: 0.25rem;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    transform: translateY(-2px);
  }
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
      file(name: { eq: "contact-github" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 100) {
            src
          }
        }
      }
      imageSharp(original: { src: { regex: "/external-link/" } }) {
        fluid(quality: 100, maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  const linkIcon = data.imageSharp.fluid.src
  const codeIcon = data.file.childImageSharp.fluid.src
  return (
    <ProjectContainer>
      <StyledWrapperLeft>
        <a href={`${url_live}`} target="_blank" rel="noopener noreferrer">
          <StyledImage fluid={imageData} alt={title} />
        </a>
      </StyledWrapperLeft>
      <StyledWrapperRight>
        <HGroup>
          <div>
            <H4>{title}</H4>
            <H5>{description}</H5>
            <H6>{date}</H6>
          </div>
          <IconLinkWrapper>
            <ProjectLink
              href={url_live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon src={linkIcon} />
            </ProjectLink>
            <ProjectLink
              href={url_code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledIcon src={codeIcon} />
            </ProjectLink>
          </IconLinkWrapper>
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
