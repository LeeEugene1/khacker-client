import React from 'react'
import Link from 'next/link'
import { HOST } from 'src/store/modules/user'
import Router from 'next/router'
import Image from 'next/image'

function ItemList({ item, key }) {
  const move = (id) => {
    const url = `${HOST}/article/${id}`
    console.log(url)
  }
  return (
    <div className="board">
      {item.content &&
        item.content.map((article) => (
          <>
            <div className="board__header">
              <div className="board__header--board">
                <span>{item.title}</span>
              </div>
              <div className="board__header--article">
                <span>{article.title}</span>
              </div>
            </div>
            <div className="board__content">
              <div>{article.content}</div>
              <div className="board__content--icon">
                <div className="board__content--createdAt">{article.createdAt.replace('T', ' ').substr(0, 16)}</div>
                <div>
                  <Image src="/images/heart.png" alt="thumbs up count" width={12} height={12} />
                  &nbsp;
                  {article.thumbupCount}
                </div>
                <div>
                  <Image src="/images/message.png" alt="comment count" width={12} height={12} />
                  &nbsp;
                  {article.commentCount}
                </div>
                <div>
                  <Image src="/images/eyes.png" alt="view count" width={12} height={12} />
                  &nbsp;
                  {article.viewCount}
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  )
}

export default ItemList
