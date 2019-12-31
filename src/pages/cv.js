import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import CvDownload from "../components/CvDownload"

const PageTitle = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CvContainer = styled.div`
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
`
const StyledInnerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
const CvTitle = styled.div`
  margin-top: 0.65rem;
`
const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
  flex-wrap: wrap;
  width: 90%;
`
const SkillSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 30%;
  flex-wrap: wrap;
`
const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
const Skill = styled.div`
  margin-right: 0.25rem;
`
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-direction: column;
  width: 90%;
  text-align: center;
  margin-bottom: .25rem;
`
const H4 = styled.h4`
  font-weight: normal;
  padding: 0 1rem 0.35rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 1.25rem;
  margin-bottom: .75rem;
`
const H5 = styled.h5`
  margin-bottom: .35rem;
  color: #4f4f4f;
  font-weight: bold;
`
const H6 = styled.h6`
  font-weight: normal;
  color: #949494;
`
const Span = styled.span`
  margin-left: .5rem;
  border-left: 1px solid #4f4f4f;
  padding-left: .5rem;
  font-weight: normal;
`
const Li = styled.li`
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`

const CV = () => {
  const data = useStaticQuery(graphql`
    {
      cvJson {
        skills_designer
        skills_developer
        skills_soft
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

  const sections = data.cvJson

  console.log("sections: ", sections)
  // console.log("sections single: ", sections.skills_designer)

  return (
    <Layout>
      <StyledBackgroundSection>
        <SEO title="CV" />
        <PageTitle>CV</PageTitle>
        <StyledWrapper>
          <CvContainer>
            <StyledInnerSection>
              <CvTitle>
                <h4>Kristin Barr</h4>
              </CvTitle>

              <H4>Skills</H4>
              <SkillsWrapper>
                <SkillSection>
                  <H5>Designer</H5>
                  <Skills>
                    {sections.skills_designer.map(skill => (
                      <Skill>{skill}</Skill>
                    ))}
                  </Skills>
                </SkillSection>
                <SkillSection>
                  <H5>Developer</H5>
                  <Skills>
                    {sections.skills_developer.map(skill => (
                      <Skill>{skill}</Skill>
                    ))}
                  </Skills>
                </SkillSection>
                <SkillSection>
                  <H5>Soft</H5>
                  <Skills>
                    {sections.skills_soft.map(skill => (
                      <Skill>{skill}</Skill>
                    ))}
                  </Skills>
                </SkillSection>
              </SkillsWrapper>

              <H4>Experience</H4>
              {sections.experience.map(job => (
                <SectionWrapper>
                  <H5>
                    {job.company}
                    <Span>{job.title}</Span>
                  </H5>
                  <H6>
                    {job.location}, {job.date}
                  </H6>
                </SectionWrapper>
              ))}
              <H4>Other Experience</H4>
              {sections.other_experience.map(job => (
                <SectionWrapper>
                  <H5>
                    {job.organization}
                    <Span>{job.role}</Span>
                  </H5>
                  <H6>
                    {job.location}, {job.date}
                  </H6>
                </SectionWrapper>
              ))}
              <H4>Education</H4>
              {sections.education.map(school => (
                <SectionWrapper>
                  <H5>
                    {school.school}
                    <Span>{school.degree}</Span>
                  </H5>
                  <H6>
                    {school.location}, {school.date}
                  </H6>
                </SectionWrapper>
              ))}
            </StyledInnerSection>
          </CvContainer>
          <CvDownload />
        </StyledWrapper>
      </StyledBackgroundSection>
    </Layout>
  )
}

export default CV
