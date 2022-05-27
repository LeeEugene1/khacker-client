import Head from 'next/head'
import ItemList from 'src/components/layout/ItemList'
import 'semantic-ui-css/semantic.min.css'
import Gnb from 'src/components/layout/Gnb'
import Banner from 'src/components/layout/Banner'
import Axios from 'axios'
import React,{ useEffect,useState } from 'react'

export const toggleGnb = React.createContext()

export default function Home({ list,name }) {
    let slugName = 'free'
    // console.log(list)
    // list.content는 자유게시판과 질문과답변이있다
    // slug: 'free'
    // title: '자유게시판'
    // __v: 0
    // _id: '623d67274014912301a4ffdc'

    // slug: 'qna'
    // title: '질문과답변'
    // __v: 0
    // _id: '623d6912df87930d9bdc68eb'
  return (
    <main>
      <Head>
        <title>케이해커 - 개발자 해외취업 커뮤니티</title>
        <meta name="description" content="index page" />
      </Head>
      <section>
        <Banner />
        <toggleGnb.Provider value={slugName}>
          <Gnb slugName={slugName} />
          {/* contextAPI 혹은 props로 gnb메뉴를 클릭하면 관련API가 나오도록 */}
          {name}
          {/* 질문과답변만나오게하려면?? filter*/}
          {/* <div>{list && list.content.map((item) => <ItemList item={item} />)}</div> */}
          <div>{list && list.content.filter((item) => item.slug === slugName).map((item) => <ItemList item={item} />)}</div>
        </toggleGnb.Provider>
      </section>
      {/* <aside>
        <input type="text" />
      </aside> */}
    </main>
  )
}

export const getStaticProps = async () => {
  // const API_URL = 'http://localhost:8000'
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  // const list = await Axios.get(`${API_URL}/main`)

  try{
  const res = await fetch(`${API_URL}/main`)
  const list = await res.json()
  if (!list) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      list: list,
      name: process.env.name,
    },
    // fallback: 'blocking',
  }
}catch(err){
    return { notFound:true}
}
}
// https://stackoverflow.com/questions/66841538/the-notfound-prop-of-getstaticprops-has-no-effect-on-page-http-status-code