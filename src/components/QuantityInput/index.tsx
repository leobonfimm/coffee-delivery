import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  incrementQuantity: (productId?: string) => void
  decrementQuantity: (productId?: string) => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={() => decrementQuantity()} disabled={quantity === 0}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={() => incrementQuantity()}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
