import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { HOST } from 'src/store/modules/user'
import axios from 'axios'
import ItemList from 'src/components/layout/ItemList'
import GNB from 'src/components/layout/Gnb'
import { Loader } from 'semantic-ui-react'

function community() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `${HOST}/main`
  console.log('babababa')
  console.log(list.id)
  const getData = async () => {
    const res = await axios.get(url)
    // console.log(res.data)
    setList(res.data.content)
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Head>
        <title>커뮤니티</title>
      </Head>
      <GNB/>
      {isLoading && (
        <div>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <div>
          <ItemList key={list.id} list={list} />
        </div>
      )}
    </div>
  )
}

export default community
