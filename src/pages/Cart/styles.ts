import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  width: 100%;
  max-width: 28rem;
  flex: 1;

  > h2 {
    ${mixins.fonts.titleXS}
  }
`

export const SelectedProductsContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-height: 36.875rem;
  overflow: auto;
`

export const OrderSummaryContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    margin-top: 1.5rem;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['yellow-700']};
    }
  }
`
