import React from 'react'

function ItemList({ list }) {
  console.log(list)
  //   const articleTInfo = list
  return (
    <div>
      <div>게시글 제목</div>
      <div>
        {list.map((item) => (
          <p key={list._id}>
            {item.title}
            {/* {item.content?.title} */}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ItemList
