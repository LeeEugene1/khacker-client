import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HOST } from 'src/store/modules/user'

function Post() {
  const [list, setList] = useState([])
  const router = useRouter()
  const { pid } = router.query
  const url = `${HOST}/article/${pid}`

  const getData = async () => {
    const res = await axios.get(url)
    setList(res.data.article)
  }

  useEffect(() => {
    if (pid) {
      getData()
    }
  }, [pid])
  console.log(list)

  return (
    <div>
      <p>Post: {pid}</p>
      <p>{list.title}</p>
      <p>{list.content}</p>
    </div>
  )
}

export default Post
