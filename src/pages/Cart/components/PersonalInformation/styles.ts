import { styled } from 'styled-components'
import { mixins } from '../../../../styles/mixins'

interface HeadingProps {
  variant: 'yellow' | 'purple'
}

export const PersonalInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
  width: 100%;

  > h2 {
    ${mixins.fonts.titleXS}
  }
`

export const AddressContainer = styled.div`
  padding: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-200']};
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Heading = styled.div<HeadingProps>`
  display: flex;
  align-items: flex-start;
  gap: 1.375rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  > svg {
    color: ${(props) =>
      props.variant === 'yellow'
        ? props.theme['yellow-700']
        : props.theme['purple-700']};
  }
`

export const InputsContainer = styled.div`
  display: grid;
  gap: 1rem 0.75rem;
  grid-template-columns: repeat(5, auto) 3.75rem;
  grid-template-areas:
    'cep cep . . . .'
    'street street street street street street'
    'number number complement complement complement complement'
    'neighborhood neighborhood city city city state';
`

export const PaymentMethodContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const RadioInputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
