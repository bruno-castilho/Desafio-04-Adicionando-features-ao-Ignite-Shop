import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag, X } from 'phosphor-react'
import { useState } from 'react'

import { globalStyles } from '@/styles/global'
import {
  Container,
  Header,
  ShoppingCartButtonClose,
  ShoppingCartContainer,
  ShoppingCartDescription,
  ShoppingCartItems,
} from '@/styles/pages/app'

import Camisa from '../assets/camisetas/1.png'
import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

  function handleShoppingCartOpen() {
    setShoppingCartOpen(true)
  }

  function handleShoppingCartClose() {
    setShoppingCartOpen(false)
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <button onClick={handleShoppingCartOpen}>
          <Handbag size={24} />
        </button>
      </Header>
      <Component {...pageProps} />
      <ShoppingCartContainer isOpen={shoppingCartOpen}>
        <ShoppingCartButtonClose
          type="button"
          onClick={handleShoppingCartClose}
        >
          <X size={24} />
        </ShoppingCartButtonClose>
        <form action="submit">
          <ShoppingCartItems>
            <h3>Sacola de compras</h3>
            <div>
              <div>
                <Image src={Camisa} alt="" width={94} height={94} />
              </div>
              <div>
                <strong>Camiseta Beyond the Limits</strong>
                <span>R$ 79,90</span>
                <button type="button">Remover</button>
              </div>
            </div>
          </ShoppingCartItems>
          <ShoppingCartDescription>
            <div>
              <p>Quantidade</p>
              <span>3 itens</span>
            </div>
            <div>
              <p>Valor total</p>
              <span>R$ 270,00</span>
            </div>

            <button type="submit">Finalizar Compra</button>
          </ShoppingCartDescription>
        </form>
      </ShoppingCartContainer>
    </Container>
  )
}
