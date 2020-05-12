import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout"
import styled from "@emotion/styled"

// TODO: FUTURE PROJECT LINKING TO SEPARATE PAGE (OR MODAL?)

const Project = ({
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
        <StyledImage fluid={imageData} alt={title} />
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

export default Project

