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
    <div>
      <h3>게시글 제목</h3>
      <div>
        {list.map((item) => (
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
