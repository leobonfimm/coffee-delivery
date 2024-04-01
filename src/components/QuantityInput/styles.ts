import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['gray-400']};

  button {
    background-color: transparent;
    display: flex;
    align-items: center;

    &:disabled {
      cursor: not-allowed;
    }
  }

  button svg {
    color: ${(props) => props.theme['purple-500']};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
