import React from 'react'
import { StyledNav, StyledLink, StyledP } from './styled'

const categories = [
  { name: 'politica', text: 'Política' },
  { name: 'internacionales', text: 'Internacionales' },
  { name: 'tecnologia', text: 'Tecnología' },
  { name: 'espectaculos', text: 'Espectáculos' },
  { name: 'deportes', text: 'Deportes' }
]

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
          {categories.map(category => (
            <StyledLink to={`/categoria/${category.name}`} key={category.name}>
              <p className="navbar-item">{category.text}</p>
            </StyledLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
