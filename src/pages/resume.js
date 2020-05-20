import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import ResumeDownload from "../components/ResumeDownload"


const Resume = () => {
  const data = useStaticQuery(graphql`
  {
      file(name: { eq: "KristinBarr_Resume" }) {
        publicURL
      }
      resumeJson {
        skills_designer
        skills_developer
        experience {
          company
          title
          location
          date
          description
        }
        other_experience {
          organization
          role
          location
          date
        }
        education {
          school
          degree
          location
          date
        }
      }
    }
    `)
    
  const sections = data.resumeJson
  const resumeLink = data.file.publicURL
  
  return (
    <Layout>
      <StyledBackgroundSection>
        <SEO title="Resume" />
        <PageTitle>Resume</PageTitle>
        <StyledWrapper>
          <ResumeContainer>
            <StyledInnerSection>
              <ResumeTitle>
                <H3>Kristin Barr</H3>
                <H3>kristinbarr@gmail.com</H3>
              </ResumeTitle>

              <H4>Skills</H4>
              <SkillsWrapper>
                <SkillSection>
                  <H5>Developer</H5>
                  <Skills>
                    {sections.skills_developer.map(skill => (
                      <Skill>{skill}</Skill>
                      ))}
                  </Skills>
                </SkillSection>
                <SkillSection>
                  <H5>Designer</H5>
                  <Skills>
                    {sections.skills_designer.map(skill => (
                      <Skill >{skill}</Skill>
                      ))}
                  </Skills>
                </SkillSection>
                {/* <SkillSection>
                  <H5>Professional</H5>
                  <Skills>
                  {sections.skills_professional.map(skill => (
                    <Skill>{skill}</Skill>
                    ))}
                    </Skills>
                  </SkillSection> */}
              </SkillsWrapper>

              <H4>Experience</H4>
              {sections.experience.map(job => (
                <SectionWrapper>
                  <H5>
                    {job.company}
                    <Span>{job.title}</Span>
                  </H5>
                  <JobLocation>
                    {job.location}, {job.date}
                  </JobLocation>
                </SectionWrapper>
              ))}
              <H4>Other Experience</H4>
              {sections.other_experience.map(job => (
                <SectionWrapper>
                  <H5>
                    {job.organization}
                    <Span>{job.role}</Span>
                  </H5>
                  <JobLocation>
                    {job.location}, {job.date}
                  </JobLocation>
                </SectionWrapper>
              ))}
              <H4>Education</H4>
              {sections.education.map(school => (
                <SectionWrapper>
                  <H5>
                    {school.school}
                    <Span>{school.degree}</Span>
                  </H5>
                  <JobLocation>
                    {school.location}, {school.date}
                  </JobLocation>
                </SectionWrapper>
              ))}
            </StyledInnerSection>
          </ResumeContainer>
          <ResumeDownload resumeLink={resumeLink} />
        </StyledWrapper>
      </StyledBackgroundSection>
    </Layout>
  )
}

export default Resume

const PageTitle = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  padding: 1rem 1rem 2rem 1rem;
  margin-bottom: 3rem;
  background: #fff;
  border: 2px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`
const StyledInnerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
const ResumeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 0.65rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 100%;
  }
`
const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.85rem;
  line-height: 1.2rem;
  text-align: center;
  width: 90%;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`
const SkillSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 30%;
  @media (max-width: 768px) {
    width: 250px;
    margin-top: 1rem;
  }
`
const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
const Skill = styled.div`
`
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  text-align: center;
  margin-bottom: .25rem;
  font-size: smaller;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`
const H3 = styled.h3`
  font-weight: normal;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`
const H4 = styled.h4`
  font-weight: normal;
  padding: 0 2rem 0.45rem 2rem;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 1.35rem;
  margin-bottom: .85rem;
`
const H5 = styled.h5`
  margin-bottom: .35rem;
  color: #4f4f4f;
  font-weight: bold;
`
const Span = styled.span`
  margin-left: .5rem;
  border-left: 1px solid #4f4f4f;
  padding-left: .5rem;
  font-weight: normal;
  @media (max-width: 576px) {
    display: block;
    border-left: none;
    padding-top: .25rem;
  }
`
const JobLocation = styled.h6`
  font-weight: normal;
  color: #949494;
  @media (max-width: 576px) {
    padding-bottom: .25rem;
  }

`
// const Li = styled.li`
//   font-size: 0.75rem;
//   line-height: 1;
//   margin-bottom: 0.25rem;
// `
