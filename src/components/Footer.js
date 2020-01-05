import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Contact from "./Contact"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(102, 170, 0, 0.7);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(245, 255, 203, 1)
  );
`
const A = styled.a`
  color: rgba(102, 170, 0, 0.7);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Contact />
      <div>
        © Kristin Barr {new Date().getFullYear()}, Built with{" "}
        <A href="https://www.gatsbyjs.org">Gatsby</A> and{" "}
        <A href="https://emotion.sh">
          <span role="img" aria-label="bowie emoji">
            👩‍🎤
          </span>
          Emotion
        </A>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
