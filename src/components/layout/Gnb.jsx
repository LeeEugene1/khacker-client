import React, { useState } from 'react'
import Link from 'next/link'

function Gnb() {
  const [toggleActive, setToggleActive] = useState(0)
  const toggletab = (index) => {
    setToggleActive(index)
  }
  return (
    <div className="GNB">
      <ul>
        <li className={toggleActive === 0 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(0)}>
          <Link href="/">
            <a>전체</a>
          </Link>
        </li>
        <li className={toggleActive === 1 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(1)}>
          <Link href="/community">
            <a>커뮤니티</a>
          </Link>
        </li>
        <li className={toggleActive === 2 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
          <Link href="/qna">
            <a>질문과 답변</a>
          </Link>
        </li>
        <li className={toggleActive === 3 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
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
