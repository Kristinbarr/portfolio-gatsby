import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledBackgroundSection from "../components/BackgroundSection"
import ProjectPreview from "../components/ProjectPreview"

const PageTitle = styled.h3`
  margin: 3rem 0 1.85rem 4.5rem;
`
const StyledProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url_live
            url_live_icon
            url_code
            url_code_icon
            description
            date
            details
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

  const projects = data.allProjectsJson.edges

  console.log("projects data.allProjectsJson.edges:", projects)
  return (
    <Layout>
      <StyledBackgroundSection>
        <SEO title="Projects" />
        <PageTitle>Projects</PageTitle>
        <StyledProjectsWrapper>
          {projects.map(({ node: project }) => {
            console.log('project:', project)
            const title = project.title
            const slug = project.slug
            const description = project.description
            const url_live = project.url_live
            const url_live_icon = project.url_live_icon
            const url_code = project.url_code
            const url_code_icon = project.url_code_icon
            const date = project.date
            const details = project.details
            const imageData = project.image.childImageSharp.fluid
            return (
              <ProjectPreview
                title={title}
                slug={slug}
                description={description}
                url_live={url_live}
                url_live_icon={url_live_icon}
                url_code={url_code}
                url_code_icon={url_code_icon}
                date={date}
                details={details}
                imageData={imageData}
              />
            )
          })}
        </StyledProjectsWrapper>
      </StyledBackgroundSection>
    </Layout>
  )
}

export default Projects
