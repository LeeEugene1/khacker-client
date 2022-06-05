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
            <p>전체</p>
        </li>
        <li className={toggleActive === 1 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(1)}>
            <p>커뮤니티</p>
        </li>
        <li className={toggleActive === 2 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
            <p>질문과 답변</p>
        </li>
        <li className={toggleActive === 3 ? 'GNB__tab--li active' : 'GNB__tab--li'} onClick={() => setToggleActive(2)}>
            <p>자유게시판</p>
        </li>
      </ul>

      {/* <li>
            <a href="/qna">채용정보</a>
          </li> */}
    </div>
  )
}

export default Gnb
