import React, { useState, useEffect } from 'react'
import Logout from 'src/components/layout/Logout'
import Login from 'src/components/layout/Login'
import { useSelector } from 'react-redux'

// import Login from './Logout.jsx'

// import logo from '/public/images/logo.png'
// import styles from '../../../styles/Home.module.scss'

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
            <a href="/qna">궁금해요</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
