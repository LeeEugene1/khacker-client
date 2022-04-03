import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { HOST } from 'src/store/modules/user'
import axios from 'axios'
import { Loader } from 'semantic-ui-react'

function qna() {
  const [isLoading, setIsLoading] = useState(true)
  const url = `${HOST}/board/qna`
  const requestBody = {
    //   email: formData.email,
    //   password: formData.password,
  }
  const getData = async () => {
    const res = await axios.get(url)
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Head>
        <title>질문과 답변</title>
      </Head>
      {isLoading && (
        <Loader inline="centered" active>
          Loading
        </Loader>
      )}
      {!isLoading && <div>content chere</div>}
    </div>
  )
}

export default qna
