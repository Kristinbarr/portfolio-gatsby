import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import CvPreview from "../components/CvPreview"

const H3 = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`
const StyledSectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledInnerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  background: #fff;
  border: 3px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    box-shadow: 8px 8px 0px #b24af2;
  }
`
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

const CV = () => {
  const data = useStaticQuery(graphql`
    {
      allCvJson {
        edges {
          node {
            skills {
              designer_skills
              developer_skills
              soft_skills
            }
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
      }
    }
  `)

  const sections = data.allCvJson.edges

  console.log("sections: ", sections)
  console.log("sections skills: ", sections.node)

  return (
    <Layout>
      <StyledBackgroundSection>
        <SEO title="CV" />
        <H3>CV</H3>
        <StyledSectionsWrapper>
          <StyledInnerSection>
            <CvContainer>
              <StyledWrapperTitle>
                {/* <Link to={`${url_live}`}>
                  <StyledImage fluid={imageData} alt={title} />
                </Link> */}
              </StyledWrapperTitle>
              <StyledWrapperSkills>
                <H4>Skills</H4>
                <ul>
                  {/* <Li>{sections.node["skills"].designer_skills}</Li>
                  <Li>{sections.node["skills"].developer_skills}</Li>
                  <Li>{sections.node["skills"].soft_skills}</Li> */}
                </ul>
                <H4>Education</H4>
                {/* {sections["experience"].map(({ node: job }) => (
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
          </StyledInnerSection>
        </StyledSectionsWrapper>
      </StyledBackgroundSection>
    </Layout>
  )
}

export default CV
