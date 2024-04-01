import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const TextInputContainer = styled.div``

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['gray-300']};

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.75rem;
    color: ${(props) => props.theme['gray-700']};

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
  }

  span {
    ${mixins.fonts.textS}
    padding-right: 0.75rem;
    color: ${(props) => props.theme['gray-600']};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS}
  font-weight: 400;
  color: red;
  margin-top: 0.5rem;
`
