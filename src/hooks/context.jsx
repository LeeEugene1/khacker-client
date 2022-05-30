import {createContext } from 'react'

const menuContext = createContext({
  selected:null,
  toggleMenu : () => {}
})
export default menuContext
