import Footer from '../src/components/layout/Footer'
import Header from '../src/components/layout/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
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
