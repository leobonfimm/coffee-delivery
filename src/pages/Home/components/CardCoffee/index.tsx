import { ShoppingCart } from 'phosphor-react'

import { QuantityInput } from '../../../../components/QuantityInput'

import {
  CartButton,
  CartContainer,
  CoffeeCard,
  CoffeeTag,
  PriceContainer,
  TagContainer,
} from './styles'
import { useContext, useState } from 'react'
import { CartContext, Product } from '../../../../context/CartContext'

interface CoffeeProps {
  coffee: {
    id: string
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}

export function CardCoffee({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(0)
  const { addNewProductToCart } = useContext(CartContext)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    setQuantity((state) => state - 1)
  }

  function handleAddNewProductToCart() {
    const productsToAdd: Product[] = []

    for (let index = 0; index < quantity; index++) {
      productsToAdd.push(coffee)
    }

    addNewProductToCart(productsToAdd)
  }

  return (
    <CoffeeCard>
      <img src={coffee.image} alt="" />

      <TagContainer>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </TagContainer>

      <h3>{coffee.title}</h3>
      <span>{coffee.description}</span>

      <footer>
        <PriceContainer>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </PriceContainer>

        <CartContainer>
          <QuantityInput
            incrementQuantity={handleIncrementQuantity}
            quantity={quantity}
            decrementQuantity={handleDecrementQuantity}
          />
          <CartButton
            disabled={quantity === 0}
            onClick={handleAddNewProductToCart}
          >
            <ShoppingCart size={20} weight="fill" />
          </CartButton>
        </CartContainer>
      </footer>
    </CoffeeCard>
  )
}
