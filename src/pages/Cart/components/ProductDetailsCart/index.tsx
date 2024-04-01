import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartContext } from '../../../../context/CartContext'
import { ActionsContainer, ProductsDetailsContainer } from './styles'
import { useContext } from 'react'
import { ProductCartDetails } from '../..'

interface ProductDetailsCartProps {
  product: ProductCartDetails
}

export function ProductDetailsCart({ product }: ProductDetailsCartProps) {
  const {
    removeProductFromCart,
    decrementQuantityProduct,
    incrementQuantityProduct,
  } = useContext(CartContext)

  return (
    <ProductsDetailsContainer>
      <img src={product.image} alt="" />

      <div>
        <span>{product.title}</span>

        <ActionsContainer>
          <QuantityInput
            decrementQuantity={() => decrementQuantityProduct(product.id)}
            incrementQuantity={() => incrementQuantityProduct(product)}
            quantity={product.quantity}
          />
          <button
            type="button"
            onClick={() => removeProductFromCart(product.id)}
          >
            <Trash size={16} />
            Remover
          </button>
        </ActionsContainer>
      </div>

      <strong>R$ {product.price.toFixed(2)}</strong>
    </ProductsDetailsContainer>
  )
}
