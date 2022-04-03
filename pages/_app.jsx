import { useState, createContext } from 'react'
import { Provider, useSelector } from 'react-redux'
import rootReducer from 'src/store'
import Footer from 'src/components/layout/Footer'
import Header from 'src/components/layout/Header'
import 'semantic-ui-css/semantic.min.css'

import '../styles/globals.scss'
import 'normalize.css'

import { createStore } from 'redux'

const initialFormData = {
  // id:'',
  email: '',
  nickname: '',
  password: '',
  confirmPassword: '',
}
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
})

const store = createStore(rootReducer)
console.log(store.getState())

function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState(initialFormData)
  // const user = useSelector((state) => state.user)
  // console.log(user)
  return (
    <Provider store={store}>
      <FormContext.Provider value={{ formData, setFormData }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </FormContext.Provider>
    </Provider>
  )
}

export default MyApp

/**
 * 페이지 전환시 레이아웃을 유지
 * 페이지 전환시 상태값을 유지
 * componentDidCatch를 이용해서 커스텀 에러 핸들링
 * 추가적인 데이터를 페이지로 주입
 * 글로벌 css를 이곳에 선언
 */
