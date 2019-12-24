import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { HeaderContainer, HeaderInner, HeaderBar, HeaderH1 } from "../styles/headerStyles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderBar />
    <HeaderInner>
      <HeaderH1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cv">CV</Link>
        <Link to="/contact">Contact</Link>
      </HeaderH1>
    </HeaderInner>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
