import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  background: #fff;
  border: 2px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    box-shadow: 8px 8px 0px #b24af2;
  }
  `
const A = styled.a`
height: 3.5rem;
  color: #4f4f4f;
  padding: 1rem 0 1rem 1.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #b24af2;
  }
`
const Img = styled.img`
  width: 1.25rem;
  margin: 0 1rem;
`

const CvDownload = ({ resumeLink }) => {
  const data = useStaticQuery(graphql`
    {
      imageSharp(original: { src: { regex: "/download/" } }) {
        fluid(quality: 100, maxHeight: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <DownloadWrapper>
      <A href={resumeLink} download>
        Full CV PDF Download
      </A>
      <Img src={data.imageSharp.fluid.src} />
    </DownloadWrapper>
  )
}

export default CvDownload
