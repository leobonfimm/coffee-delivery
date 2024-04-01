import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 72.5rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1.25rem;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

export const CartNavLink = styled(NavLink)`
  position: relative;

  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0;
  border: 0;
  padding-bottom: 0;
  cursor: pointer;

  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['yellow-100']};
  }
`

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border-radius: 50%;
  font-size: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
`

export const LocationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-700']};

  > svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
