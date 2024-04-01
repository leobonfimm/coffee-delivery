import { useContext, useEffect, useMemo } from 'react'
import zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { PersonalInformation } from './components/PersonalInformation'
import { CartContext, Product } from '../../context/CartContext'
import { ProductDetailsCart } from './components/ProductDetailsCart'

import {
  CartContainer,
  OrderDetailsContainer,
  OrderSummaryContainer,
  SelectedProductsContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  cep: zod.number({
    invalid_type_error: 'Informe o CEP',
    required_error: 'Informe o CEP',
  }),
  street: zod.string(),
  neighborhood: zod.string(),
  number: zod.number(),
  complement: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export interface ProductCartDetails extends Product {
  quantity: number
}

export function Cart() {
  const { products, createNewOrder, removeAllProductFromCart } =
    useContext(CartContext)
  const navigate = useNavigate()
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })
  const { handleSubmit } = newOrderForm

  console.log(products)

  useEffect(() => {
    if (!products || products.length === 0) {
      navigate('/')
    }
  }, [navigate, products])

  const productsGrouped = useMemo(() => {
    return products.reduce((acc: ProductCartDetails[], item) => {
      if (acc.findIndex((product) => product.id === item.id) === -1) {
        const totalCoffeesAdd = products.filter(
          (product) => product.id === item.id,
        ).length
        acc.push({
          ...item,
          quantity: totalCoffeesAdd,
          price: item.price * totalCoffeesAdd,
        })
      }

      return acc
    }, [])
  }, [products])

  const total = useMemo(() => {
    const coffees = productsGrouped.reduce((acc, item) => {
      return acc + item.price
    }, 0)

    const delivery = coffees / 10

    const order = coffees + delivery

    return {
      coffees,
      delivery,
      order,
    }
  }, [productsGrouped])

  function handleCompleteOrder(data: NewOrderFormData) {
    createNewOrder(data)
    removeAllProductFromCart()
    navigate('/success')
  }

  return (
    <CartContainer onSubmit={handleSubmit(handleCompleteOrder)}>
      <FormProvider {...newOrderForm}>
        <PersonalInformation />
      </FormProvider>

      <OrderDetailsContainer>
        <h2>Cafés Selecionados</h2>

        <SelectedProductsContainer>
          {productsGrouped.map((product) => (
            <ProductDetailsCart key={product.id} product={product} />
          ))}

          <OrderSummaryContainer>
            <div>
              Total de itens <span>R$ {total.coffees.toFixed(2)}</span>
            </div>
            <div>
              Entrega <span>R$ {total.delivery.toFixed(2)}</span>
            </div>
            <div>
              <strong>Total</strong>{' '}
              <strong>R$ {total.order.toFixed(2)}</strong>
            </div>

            <button>confirmar pedido</button>
          </OrderSummaryContainer>
        </SelectedProductsContainer>
      </OrderDetailsContainer>
    </CartContainer>
  )
}
