import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const CvContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  background: pink;
`
const StyledWrapperTitle = styled.div`
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
const StyledWrapperSkills = styled.div`
  display: flex;
  flex-direction: column;
`
const HGroup = styled.hgroup`
  display: flex;
  justify-content: space-between;
`
const H4 = styled.h4``
const H5 = styled.h5``
const H6 = styled.h6`
  color: #aaa;
  margin-bottom: 0.65rem;
`
const Li = styled.li`
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`

const CvPreview = ({ skills, experience, otherExperience, education }) => (
  <CvContainer>
    <StyledWrapperTitle>
      {/* <Link to={`${url_live}`}>
        <StyledImage fluid={imageData} alt={title} />
      </Link> */}
    </StyledWrapperTitle>
    <StyledWrapperSkills>
      {console.log("skills CV PREVIEW: ", skills)}
      {console.log("experience CV PREVIEW: ", experience)}

      <H4>Skills</H4>
      <ul>
        {/* <Li>{skills.designer_skills}</Li>
        <Li>{skills.developer_skills}</Li>
        <Li>{skills.soft_skills}</Li> */}
      </ul>
      <H4>Education</H4>
      {/* {experience.map(({ node: job }) => (
        <>
          <HGroup>
            <H5>
              {job.company} | {job.title}
            </H5>
            <H6>
              {job.location} | {job.date}
            </H6>
          </HGroup>
          <ul>
            {job.description.map(duty => (
              <Li>- {duty}</Li>
            ))}
          </ul>
        </>
      ))} */}
    </StyledWrapperSkills>
  </CvContainer>
)

export default CvPreview
