import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import Image from "gatsby-image"

const DownloadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
  background: #fff;
  border: 2px solid #4f4f4f;
  box-shadow: 4px 4px 0px #b24af2;
`
const A = styled.a`
  color: #4f4f4f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #b24af2;
  }
`

const CvDownload = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "KristinBarr_Resume" }) {
        publicURL
      }
    }
  `)
  console.log('pub-url:' , data)
  return (
    <DownloadWrapper>
      <A href={data.file.publicURL} download>
        Full CV PDF Download
      </A>
      {/* <Image /> */}
    </DownloadWrapper>
  )
}

export default CvDownload
