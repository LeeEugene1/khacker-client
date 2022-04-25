import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logout from 'src/components/layout/Logout'
import Login from 'src/components/layout/Login'
import { useSelector } from 'react-redux'
import { checkLogin } from 'src/common'
import Button from 'src/components/styled/button'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const user = useSelector((state) => state.user)
  const [isMobile, setIsMobile] = useState(false)
  const toggle = () => setIsMobile(!isMobile)
  return (
    <div className="Menu">
      <div className="Menu__logo">
        <Link href="/">
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>
      <nav>
        <ul className={isMobile ? 'Menu__links--mobile' : 'Menu__links'}>
          {user.user ? <Logout /> : <Login />}

          <li>
            <Button onClick={(e) => checkLogin(e, user.user)}>글쓰기</Button>
          </li>
        </ul>
        <div className="Menu__icon" onClick={toggle}>
          {isMobile ? <FiX /> : <FiMenu />}
        </div>
      </nav>
    </div>
  )
}

export default Header
