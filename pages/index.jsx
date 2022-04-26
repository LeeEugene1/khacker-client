import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HOST } from 'src/store/modules/user'
import axios from 'axios'
import ItemList from 'src/components/layout/ItemList'
import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Gnb from 'src/components/layout/Gnb'
import Banner from 'src/components/layout/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>케이해커 - 개발자 해외취업 커뮤니티</title>
      </Head>
      <Banner />
      <Gnb />
    </>
  )
}
