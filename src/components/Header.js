import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
// import Hamburger from "./Hamburger"

// breakpoints = [576, 768, 992, 1200]

const HeaderBar = styled.div`
  position: sticky;
  top: 0px;
  right: 0%;
  bottom: auto;
  left: 0%;
  z-index: 100;
  width: 100%;
  height: 8px;
  background: #b24af2;
`
const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
const TitleLinks = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const TitleLink = styled(Link)`
  padding: 0 0.5rem 0 1.2rem;
  text-decoration: none;
  color: #4f4f4f;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    color: #b24af2;
  }
  @media (max-width: 992px) {
    padding-right: 0;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`
const TitleDescriptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Description = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
  vertical-align: middle;
  padding: 0.05rem 1rem;
  border-left: 1px solid #4f4f4f;
  color: #4f4f4f;
  &:first-of-type {
    border-left: none;
  }
  @media (max-width: 992px) {
    padding: 0.05rem .5rem;
  }
  @media (max-width: 768px) {
    margin-top: .25rem;
  }
`
const NavLinks = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 100;
  padding: 0 1.3rem;
  border-left: 1px solid #4f4f4f;
  color: #4f4f4f;
  &:first-of-type {
    border-left: none;
  }
  @media (max-width: 992px) {
    padding: 0 .75rem;
    font-size: .75rem;
  }
`
const NavLinkText = styled.p`
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    color: #b24af2;
    transform: translate(0, -3px);
  }
`

const Header = () => (
  <>
    <HeaderBar />
    <HeaderInner>
      <TitleLinks>
        <TitleLink to="/">KRISTIN BARR</TitleLink>
        <TitleDescriptions>
          <Description>developer</Description>
          <Description>designer</Description>
          <Description>creator</Description>
        </TitleDescriptions>
      </TitleLinks>
      <NavLinks>
        <NavLink nav={"/"} to="/">
          <NavLinkText>
            ABOUT
          </NavLinkText>
        </NavLink>
        <NavLink nav={"/projects/"} to="/projects/">
          <NavLinkText>
            PROJECTS
          </NavLinkText>
        </NavLink>
        <NavLink nav={"/resume/"} to="/resume">
          <NavLinkText>
            RESUME
          </NavLinkText>
        </NavLink>
      </NavLinks>
      
      {/* <Hamburger/> */}

    </HeaderInner>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
