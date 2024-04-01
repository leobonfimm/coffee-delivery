import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

const ITEMS_ICON_TYPE = {
  yellow: 'yellow-500',
  'yellow-dark': 'yellow-700',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface ItemsContainerProps {
  variant: 'yellow' | 'yellow-dark' | 'gray' | 'purple'
}

export const Wrapper = styled.main``

export const IntroContainer = styled.div`
  background-image: url('src/assets/intro-image-bg.svg');
`

export const IntroContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem 1.25rem;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
`

export const IntroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['gray-900']};
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['gray-800']};
  }
`

export const IntroItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  grid-column-gap: 1rem;
`

export const IntroItemContainer = styled.div<ItemsContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ITEMS_ICON_TYPE[props.variant]]};
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 3.375rem;
  padding-bottom: 2rem;

  h2 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CoffeeListItems = styled.div`
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
