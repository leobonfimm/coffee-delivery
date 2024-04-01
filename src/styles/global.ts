import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0;
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${mixins.fonts.textM}
  }

  button {
    border: none;
    cursor: pointer;
  }
`
