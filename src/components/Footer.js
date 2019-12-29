import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const A = styled.a`
  color: rgba(102, 170, 0, 0.7);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundImage: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(245, 255, 203, 1))`,
        zIndex: 1,
        width: `100vw`,
        padding: `1rem`,
        marginTop: `1rem`,
        textAlign: `center`,
        color: `rgba(102,170,0,.7)`,
        fontSize: `.7rem`,
      }}
    >
      © Kristin Barr {new Date().getFullYear()}, Built with{" "}
      <A href="https://www.gatsbyjs.org">Gatsby</A>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
