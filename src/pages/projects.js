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
            url_code
            description
            date
            details
            image {
              childImageSharp {
                fluid(quality: 100, maxWidth: 200) {
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
            const title = project.title
            const slug = project.slug
            const description = project.description
            const url_live = project.url_live
            const url_code = project.url_code
            const date = project.date
            const details = project.details
            const imageData = project.image.childImageSharp.fluid
            return (
              <ProjectPreview
                title={title}
                slug={slug}
                description={description}
                url_live={url_live}
                url_code={url_code}
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
