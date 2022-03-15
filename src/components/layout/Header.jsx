import React from 'react'
// import logo from '/public/images/logo.png'
// import styles from '../../../styles/Home.module.scss'

function Header() {
  return (
    <div className="Menu">
      <div className="Menu__logo">
        <a href="/">
          <img src="/images/logo.png" alt="" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/qna">궁금해요</a>
          </li>
          <li>
            <a href="/myPage">마이페이지</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
