import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from 'react'
import { FieldError } from 'react-hook-form'

import { ErrorMessage, InputContainer, TextInputContainer } from './styles'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

function Input(
  { isOptional = false, containerProps, error, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <TextInputContainer {...containerProps}>
      <InputContainer>
        <input type="text" {...rest} ref={ref} />
        {isOptional && <span>Opcional</span>}
      </InputContainer>

      {error?.message && (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      )}
    </TextInputContainer>
  )
}

export const TextInput = forwardRef(Input)
