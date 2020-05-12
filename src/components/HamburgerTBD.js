import React, { setState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import menuIcon from "../images/menu-button.png"

const HamContainer = styled.div`
  // transition: all 0.3s ease-in-out 0s;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 40px;
    margin: 0 1rem;
  }
  &:hover {
    filter: invert(33%) sepia(92%) saturate(2700%) hue-rotate(238deg)
      brightness(101%) contrast(90%);
  }
`

const Hambuger = () => {
  const [toggle, setToggle] = setState(false)

  const handleClickOutside = () => {
    setState({
      listOpen: false
    })
  }
  const toggleList = () => {
    setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  return (
    <HamContainer>
      <img src={menuIcon} alt="menu" />

    </HamContainer>
  )
}

export default Hambuger
