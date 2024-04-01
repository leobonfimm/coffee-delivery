import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

const ITEMS_ICON_TYPE = {
  yellow: 'yellow-500',
  'yellow-dark': 'yellow-700',
  purple: 'purple-500',
} as const

interface PersonalInformationSummaryProps {
  variant: 'yellow' | 'yellow-dark' | 'purple'
}

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.375rem;
  }

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-500']};
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['gray-800']};
  }
`

export const SummaryOrder = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.3125rem;
  margin-top: 2.5rem;
`

export const PersonalInformationContainer = styled.div`
  width: 100%;
  border: 1px solid;
  border-radius: 6px 36px;
  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) => `
    linear-gradient(to bottom right, ${props.theme['yellow-500']}, ${props.theme['purple-500']})
  `};

  > div {
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
  }
`

export const PersonalInformationSummary = styled.div<PersonalInformationSummaryProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ITEMS_ICON_TYPE[props.variant]]};
  }
`
