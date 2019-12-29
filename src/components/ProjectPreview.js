import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  background: #fff;
  border: 3px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
`
const StyledWrapperLeft = styled.div`
  width: 20rem;
  margin: 1rem 1rem 1rem .5rem;
  box-shadow: 0 0 7px rgba(0,0,0,.3);
`
const StyledWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`
const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
`
const H4 = styled.h4``
const H5 = styled.h5``
const H6 = styled.h6`
  color: #aaa;
  margin-bottom: .65rem;
`
const Li = styled.li`
  font-size: .75rem;
  line-height: 1;
  margin-bottom: .25rem;
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
}) => (
  <ProjectContainer>
    <StyledWrapperLeft>
      <Link to={`${url_live}`}>
        <Image fluid={imageData} alt={title} />
      </Link>
    </StyledWrapperLeft>
    <StyledWrapperRight>
      <HGroup>
        <H4>{title}</H4>
        <H5>{description}</H5>
        <H6>{date}</H6>
      </HGroup>
      <ul>
        {details.map(detail => (
          <Li>{detail}</Li>
        ))}
      </ul>
    </StyledWrapperRight>
  </ProjectContainer>
)

export default ProjectPreview
