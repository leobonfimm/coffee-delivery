import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import { RadioInputContainer } from './styles'

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected: boolean
}

function Radio(
  { children, isSelected, ...rest }: RadioInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioInputContainer data-state={isSelected}>
      <input type="radio" {...rest} ref={ref} />
      {children}
    </RadioInputContainer>
  )
}

export const RadioInput = forwardRef(Radio)
