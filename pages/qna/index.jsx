import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { HOST } from 'src/store/modules/user'
import axios from 'axios'
import { Loader } from 'semantic-ui-react'
import ItemList from 'src/components/layout/ItemList'
import GNB from 'src/components/layout/Gnb'

function qna() {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `${HOST}/board/qna`
  const requestBody = {
    //   email: formData.email,
    //   password: formData.password,
  }
  const getData = async () => {
    const res = await axios.get(url)
    setList(res.data.article)
    // console.log(res.data.article)
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section>
      <Head>
        <title>질문과 답변</title>
      </Head>
      <GNB/>
      {isLoading && (
        <Loader inline="centered" active>
          Loading
        </Loader>
      )}
      {!isLoading && <ItemList list={list} />}
    </section>
  )
}

export default qna
