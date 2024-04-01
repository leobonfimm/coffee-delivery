import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import introImage from '../../assets/intro-image.svg'
import data from '../../../data.json'

import {
  CoffeeListContainer,
  CoffeeListItems,
  IntroContainer,
  IntroContent,
  IntroDetails,
  IntroItemContainer,
  IntroItemsContainer,
  Wrapper,
} from './styles'
import { CardCoffee } from './components/CardCoffee'

export function Home() {
  return (
    <Wrapper>
      <IntroContainer>
        <IntroContent>
          <div>
            <IntroDetails>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </IntroDetails>

            <IntroItemsContainer>
              <IntroItemContainer variant="yellow-dark">
                <ShoppingCart size={32} weight="fill" />
                Compra simples e segura
              </IntroItemContainer>
              <IntroItemContainer variant="yellow">
                <Timer size={32} weight="fill" />
                Entrega rápida e rastreada
              </IntroItemContainer>
              <IntroItemContainer variant="gray">
                <Package size={32} weight="fill" />
                Embalagem mantém o café intacto
              </IntroItemContainer>
              <IntroItemContainer variant="purple">
                <Coffee size={32} weight="fill" />O café chega fresquinho até
                você
              </IntroItemContainer>
            </IntroItemsContainer>
          </div>

          <img src={introImage} alt="" />
        </IntroContent>
      </IntroContainer>

      <CoffeeListContainer>
        <h2>Nosso cafés</h2>

        <CoffeeListItems>
          {data.coffees.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListItems>
      </CoffeeListContainer>
    </Wrapper>
  )
}
