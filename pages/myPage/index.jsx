import React, { useEffect, useState } from 'react'
import Head from 'next/head'

function myPage() {
  const initialState = {
    id: '',
    email: '',
    nickname: '',
  }
  const [user, setUser] = useState(initialState)
  let userInfo = null
  useEffect(() => {
    if (typeof window !== 'undefined') {
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
      setUser({
        ...user,
        email: userInfo.email,
      })
    }
  }, [])
  return (
    <div>
      <Head>
        <title>마이페이지</title>
      </Head>
      {user.email}
    </div>
  )
}

export default myPage
