import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 12px;
  margin: 10px 0;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: min-content 340px repeat(3, max-content);
  align-items: center;
`
export const StyledTextCard = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  background: rgba(252, 75, 99, 0.6);
  padding: 4px 14px;
  border-radius: 0px 0px 0px 5px;
  z-index: 1;
`
