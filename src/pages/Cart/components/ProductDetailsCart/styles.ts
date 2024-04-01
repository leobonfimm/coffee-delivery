import { styled } from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ProductsDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.5rem;

  & + div {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme['gray-400']};
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    margin-left: auto;
    align-self: flex-start;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    ${mixins.fonts.buttonM}

    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};
    background-color: ${(props) => props.theme['gray-400']};
    padding: 0.5rem;
    border-radius: 6px;

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
    }
  }
`
