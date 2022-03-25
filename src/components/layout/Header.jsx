import React, { useState, useEffect } from 'react'
import Logout from 'src/components/layout/Logout'
import Login from 'src/components/layout/Login'
import { useSelector } from 'react-redux'
import { checkLogin } from 'src/common'
// import Login from './Logout.jsx'

// import logo from '/public/images/logo.png'
// import styles from '../../../styles/Home.module.scss'
// import Button from '/components/styled/button'
import Button from '../styled/button'

function Header() {
  const user = useSelector((state) => state.user)
  return (
    <div className="Menu">
      <div className="Menu__logo">
        <a href="/">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <nav>
        <ul>
          {user.user ? <Logout /> : <Login />}
          <li>
            <a href="/qna">게시글</a>
          </li>
          {/* <li>
            <a href="/qna">채용정보</a>
          </li> */}
          <li>
            <Button onClick={(e) => checkLogin(e, user.user)}>글쓰기</Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
