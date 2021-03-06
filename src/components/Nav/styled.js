import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav`
  color: #eeeeee;
`
export const StyledLink = styled(Link)`
  color: #757575;
`
export const StyledLinkSearch = styled(Link)`
  color: #757575;
  pointer-events: ${(props) => props.active ? 'auto' : 'none' }
`

export const StyledP = styled.p`
  color: #212121;
`
