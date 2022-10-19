import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jhonatan-michel-mogoll%C3%B3n-garc%C3%ADa-8098131a7/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/jhondeser" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials