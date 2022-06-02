import React, { useState } from 'react'
import Link from 'next/link'


function Gnb({ slugName }) {
  console.log('ssss',slugName)
  slugName = 'test'
  const [toggleActive, setToggleActive] = useState(0)
  const toggletab = (index) => {
    setToggleActive(index)
  }
  return (
    <div className="GNB">
      <ul>
        <li className={toggleActive === 0 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(0)}>
            <a>전체</a>
        </li>
        <li className={toggleActive === 1 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(1)}>
            <a>커뮤니티</a>
        </li>
        <li className={toggleActive === 2 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
            <a>질문과 답변</a>
        </li>
        <li className={toggleActive === 3 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
            <a>자유게시판</a>
        </li>
      </ul>

      {/* <li>
            <a href="/qna">채용정보</a>
          </li> */}
    </div>
  )
}

export default Gnb
