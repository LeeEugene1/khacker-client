import React from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from 'src/store/modules/user'
import { useRouter } from 'next/router'
import Router from 'next/router'

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
        <div onClick={() => router.push('/myPage')}>내정보</div>
      </li>
      <li>
        <div onClick={(e) => handleLogout(e)}>로그아웃</div>
      </li>
    </>
  )
}

export default Logout
