import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-200']};
  padding: 0 1.25rem 1.25rem;
  align-items: center;
  max-width: 16rem;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  > img {
    margin-top: -1.25rem;
    align-self: center;
  }

  > span {
    margin-top: 0.5rem;
    width: 100%;
    text-align: center;

    ${(props) => props.theme['gray-600']}
    ${mixins.fonts.textS}
  }

  > h3 {
    margin-top: 16px;

    color: ${(props) => props.theme['gray-800']};
    ${mixins.fonts.titleS}
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const CoffeeTag = styled.span`
  ${mixins.fonts.tag}
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  text-transform: uppercase;
  margin-top: 0.75rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme['gray-700']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme['gray-700']};
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0;
  border: 0;
  cursor: pointer;

  transition:
    background-color 0.2s,
    color 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme['gray-500']};
  }
`
