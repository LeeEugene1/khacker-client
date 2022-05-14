import React from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from 'src/store/modules/user'
import Router, { useRouter } from 'next/router'

import Button from 'src/components/styled/button'

function Logout() {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(LOGOUT())
    Router.push('/')
  }
  return (
    <>
      {/* {user.name} */}
      <li>
        <Button primary onClick={() => router.push('/myPage')}>
          내정보
        </Button>
      </li>
      <li>
        <Button border onClick={(e) => handleLogout(e)}>
          로그아웃
        </Button>
      </li>
    </>
  )
}

export default Logout
