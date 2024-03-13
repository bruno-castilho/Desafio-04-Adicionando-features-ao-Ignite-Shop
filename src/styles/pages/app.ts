import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    width: 48,
    height: 48,
    backgroundColor: '$gray800',
    border: 'none',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$gray500',
    cursor: 'pointer',
  },
})

export const ShoppingCartContainer = styled('div', {
  variants: {
    isOpen: {
      true: {
        width: 480,
        opacity: 1,
      },
      false: {
        width: 0,
        opacity: 0,
      },
    },
  },

  transition: 'all 0.2s ease-in-out',
  height: '100%',
  backgroundColor: '$gray800',
  position: 'fixed',
  right: 0,

  form: {
    width: '100%',
    height: '100%',
    padding: '72px 48px 48px 48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const ShoppingCartButtonClose = styled('button', {
  position: 'absolute',
  color: '$gray500',
  background: 'none',
  border: 'none',
  top: 28,
  right: 28,
  cursor: 'pointer',
})

export const ShoppingCartItems = styled('div', {
  h3: {
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  div: {
    display: 'flex',
    gap: 20,

    'div:first-child': {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',

      background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,
      width: 102,
      height: 93,

      img: {
        objectFit: 'cover',
      },
    },

    'div:last-child': {
      display: 'flex',
      flexDirection: 'column',

      strong: {
        fontSizze: '$md',
        color: '$gray500',
      },

      span: {
        color: '$gray100',
        fontSizze: '$md',
      },

      button: {
        fontSizze: '$sm',
        alignSelf: 'baseline',
        background: 'none',
        color: '$green300',
        border: 'none',
        cursor: 'pointer',
      },
    },
  },
})

export const ShoppingCartDescription = styled('div', {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$gray100',
    fontSize: '$md',

    '&:first-child': {
      fontSize: '$sm',
      color: '$gray500',
      marginBottom: '0.5rem',
    },
  },

  button: {
    background: '$green500',
    cursor: 'pointer',
    width: '100%',
    height: 69,
    border: 'none',
    borderRadius: 8,
    marginTop: '3.5625rem',

    fontSize: '$md',
    color: '$gray100',

    '&:hover': {
      background: '$green300',
    },
  },
})
