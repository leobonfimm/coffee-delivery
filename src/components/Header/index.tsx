import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  Badge,
  CartNavLink,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { products } = useContext(CartContext)

  const numberOfProductsAdded = products.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <NavContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Sobral, CE
        </LocationContainer>

        <CartNavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {numberOfProductsAdded > 0 && (
            <Badge>
              {numberOfProductsAdded > 9 ? '9+' : numberOfProductsAdded}
            </Badge>
          )}
        </CartNavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
