import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const HeaderContainer = styled.header`
  width: 100%;
`
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1rem;
`
const HeaderBar = styled.div`
  background: #b24af2;
  height: 8px;
`
const H1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`
const NavLinks = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const homeLink = css`
  text-decoration: none;
  color: #4f4f4f;
`
const navLink = css`
  text-decoration: none;
  border-left: 1px solid #4f4f4f;
  padding: 0 1em;
  color: #4f4f4f;
  &:first-child {
    border-left: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderBar />
    <HeaderInner>
      <H1>
        <Link css={homeLink} to="/">
          {siteTitle}
        </Link>
      </H1>
      <NavLinks>
        <Link to="/about" css={navLink}>
          About
        </Link>
        <Link to="/projects" css={navLink}>
          Projects
        </Link>
        <Link to="/cv" css={navLink}>
          CV
        </Link>
        <Link to="/contact" css={navLink}>
          Contact
        </Link>
      </NavLinks>
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
