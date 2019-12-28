import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Footer = (props) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  console.log("children in footer: ", props)
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
        color: `#4f4f4f`,
        fontSize: `.8rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with{" "}
      <a
        href="https://www.gatsbyjs.org"
        style={{
          color: `#4f4f4f`,
        }}
      >
        Gatsby
      </a>
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
