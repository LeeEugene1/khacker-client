import React from 'react'
import Link from 'next/link'
import { HOST } from 'src/store/modules/user'
import Router from 'next/router'

function ItemList({ list, key }) {
  const move = (id) => {
    const url = `${HOST}/article/${id}`
    // Router.push(`/qna/${id}`)
    console.log(url)
  }
  return (
    <div className="board">
      <div className="board--title">
        <h3>질문과 답변</h3>
      </div>
      <div className="board--content">
        {list && list.map((item) => (
          <Link href={`/view/${item._id}`}>
            <p>{item.title}</p>
            {/* <Link key={item._id} href="/qna/"></Link> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ItemList
