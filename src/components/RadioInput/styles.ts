import { styled } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const RadioInputContainer = styled.label`
  ${mixins.fonts.buttonM}
  background-color: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  flex: 1;
  color: ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid transparent;

  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  input {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-100']};
    border-color: ${(props) => props.theme['purple-500']};
  }
`
