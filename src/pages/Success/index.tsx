import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import deliveryHero from '../../assets/delivery-hero.svg'

import {
  PersonalInformationContainer,
  PersonalInformationSummary,
  SuccessContainer,
  SummaryOrder,
} from './styles'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const PAYMENT_METHOD = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  cash: 'Dinheiro',
} as const

export function Success() {
  const navigate = useNavigate()
  const { order } = useContext(CartContext)
  const paymentMethod = PAYMENT_METHOD[order.paymentMethod]

  useEffect(() => {
    if (Object.keys(order).length === 0 && order.constructor === Object) {
      navigate('/')
    }
  }, [navigate, order])

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SummaryOrder>
        <PersonalInformationContainer>
          <div>
            <PersonalInformationSummary variant="purple">
              <MapPin size={32} />
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {order.street}, {order.number}
                  </strong>
                </span>
                <p>
                  {order.neighborhood} - {order.city}, {order.state}
                </p>
              </div>
            </PersonalInformationSummary>

            <PersonalInformationSummary variant="yellow">
              <Timer size={32} />
              <div>
                <span>Previsão de Entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </PersonalInformationSummary>

            <PersonalInformationSummary variant="yellow-dark">
              <CurrencyDollar size={32} />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod}</strong>
              </div>
            </PersonalInformationSummary>
          </div>
        </PersonalInformationContainer>

        <img src={deliveryHero} alt="Pedido Confirmado" />
      </SummaryOrder>
    </SuccessContainer>
  )
}
