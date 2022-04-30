import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HOST } from 'src/store/modules/user'
import Axios from 'axios'
import ItemList from 'src/components/layout/ItemList'
import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Gnb from 'src/components/layout/Gnb'
import Banner from 'src/components/layout/Banner'

export default function Home() {
  const [list, setList] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = 'http://localhost:3000/main'
  function getDate() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data)
      setList(res.data)
    })
  }
  useEffect(() => {
    getDate()
    setIsLoading(false)
  }, [])
  return (
    <main>
      <Head>
        <title>케이해커 - 개발자 해외취업 커뮤니티</title>
        <meta name="description" content="index page" />
      </Head>
      <section>
        <Banner />
        <Gnb />
        {isLoading ? (
          <Loader inline="centered" active>
            Loading
          </Loader>
        ) : (
          // <ItemList list={list} />
          <div>{list && list.content.map((item) => <ItemList item={item} />)}</div>
        )}
      </section>
      <aside>
        <input type="text" />
      </aside>
    </main>
  )
}
