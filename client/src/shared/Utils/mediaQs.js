import { css } from 'styled-components'

const sizes = {
   papabear: 1150,
   brotherbear: 900,
   mamabear: 700,
   babybear: 400
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})