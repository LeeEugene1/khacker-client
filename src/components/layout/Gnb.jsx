import React from 'react'
import Link from 'next/link'

function Gnb() {
  return (
    <div className="GNB">
      <ul>
        <li>
          <Link href="/">
            <a>전체</a>
          </Link>
        </li>
        <li>
          <Link href="/community">
            <a>커뮤니티</a>
          </Link>
        </li>
        <li>
          <Link href="/qna">
            <a>질문과 답변</a>
          </Link>
        </li>
        <li>
          <Link href="/free">
            <a>자유게시판</a>
          </Link>
        </li>
      </ul>

      {/* <li>
            <a href="/qna">채용정보</a>
          </li> */}
    </div>
  )
}

export default Gnb
