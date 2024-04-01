import { ReactNode, createContext, useState } from 'react'

export interface Order {
  number: number
  cep: number
  street: string
  neighborhood: string
  complement: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export interface Product {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CartContextType {
  products: Product[]
  order: Order
  addNewProductToCart: (product: Product[]) => void
  removeProductFromCart: (productId: string) => void
  removeAllProductFromCart: () => void
  decrementQuantityProduct: (productId: string) => void
  incrementQuantityProduct: (product: Product) => void
  createNewOrder: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [order, setOrder] = useState<Order>({} as Order)

  function addNewProductToCart(product: Product[]) {
    setProducts((state) => [...state, ...product])
  }

  function removeProductFromCart(productId: string) {
    setProducts((state) => state.filter((product) => product.id !== productId))
  }

  function decrementQuantityProduct(productId: string) {
    const firstIndex = products.findIndex((product) => product.id === productId)
    const newArray = [...products]
    newArray.splice(firstIndex, 1)

    setProducts(newArray)
  }

  function incrementQuantityProduct(product: Product) {
    setProducts((state) => [...state, product])
  }

  function createNewOrder(order: Order) {
    setOrder(order)
  }

  function removeAllProductFromCart() {
    setProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        products,
        order,
        addNewProductToCart,
        removeProductFromCart,
        removeAllProductFromCart,
        decrementQuantityProduct,
        incrementQuantityProduct,
        createNewOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
