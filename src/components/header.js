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
  maxwidth: 960;
  margin: 0 auto;
  padding: 1.25rem 1rem;
`
const HeaderBar = styled.div`
  background: #b24af2;
  height: 8px;
`
const HomeLinks = styled.h1`
  display: inline;
  margin: 0;
  font-size: 1.5rem;
`
const HomeLink = styled(Link)`
  padding-right: 0.25rem;
  text-decoration: none;
  color: #4f4f4f;
`
const Span = styled.span`
  font-size: 0.8rem;
  font-weight: 100;
  vertical-align: middle;
  padding: 0 0.6em;
  border-left: 1px solid #4f4f4f;
  color: #4f4f4f;
  &:first-of-type {
    border-left: none;
  }
`
const NavLinks = styled.h6`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0;
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
  padding: 0 0.6em;
  border-left: 1px solid #4f4f4f;
  color: #4f4f4f;
  &:first-of-type {
    border-left: none;
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderBar />
    <HeaderInner>
      <HomeLinks>
        <HomeLink to="/">Kristin Barr</HomeLink>
        <Span>Developer</Span>
        <Span>Designer</Span>
        <Span>Creator</Span>
      </HomeLinks>
      <NavLinks>
        <NavLink nav={"/"} to="/">
          About
        </NavLink>
        <NavLink nav={"/projects/"} to="/projects/">
          Projects
        </NavLink>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
