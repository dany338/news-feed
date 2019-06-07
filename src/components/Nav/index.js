import React from 'react'
import { StyledNav, StyledLink, StyledP } from './styled'

const categoriesId = {
  politica: 'politica',
  internacionales: 'internacionales',
  tecnologia: 'tecnologia',
  espectaculos: 'espectaculos',
  deportes: 'deportes'
}

const Nav = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <StyledLink to="/">
            <p className="navbar-item">HOME</p>
          </StyledLink>
          {/*
            const result = Array.from(Object.keys(categoriesId), cat => ( console.log(cat) ) ))
            const result2 = Object.keys(categoriesId).map((key, index) => ( console.log(categoriesId[key]) )) */}
          {Object.keys(categoriesId).map((key, index) => (
            <StyledLink to={`/categoria/${categoriesId[key]}`} key={index}>
              <p className="navbar-item">{categoriesId[key].charAt(0).toUpperCase() + categoriesId[key].slice(1)}</p>
            </StyledLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
