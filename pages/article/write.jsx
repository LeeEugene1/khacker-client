import React, { useState } from 'react'
import useLocalStorage from 'src/hooks/useLocalStorage'
import Button from 'src/components/styled/button'
import axiosWrapper from '/src/axiosWrapper'
import { HOST } from 'src/store/modules/user'
import Router from 'next/router'

function write() {
  const initialState = {
    author: '61f8161eac714bdf22e4fb1c',
    title: '',
    content: '',
    board: '623d67274014912301a4ffdc',
  }
  const [formData, setFormData] = useState(initialState)
  function changeState(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleWriteSubmit = (e) => {
    e.preventDefault()
    const url = `${HOST}/article/create`
    const requestBody = {
      author: formData.author,
      title: formData.title,
      content: formData.content,
      board: formData.board,
    }
    debugger
    axiosWrapper('POST', url, requestBody)
    alert('게시글이 등록되었습니다.')
    Router.push('/')
  }
  console.log(useLocalStorage('userInfo', 'test', 'get'))
  return (
    //옵션:qna, 자유게시판, 공지사항
    <div className="write">
      <form action="">
        <select name="" id="">
          <option value="free">자유게시판</option>
          <option value="qna">질문과답변</option>
        </select>
        <input type="text" name="title" onChange={changeState} value={formData.title} />
        <textarea id="" name="content" rows="15" cols="" onChange={changeState} value={formData.content} />
        <Button type="submit" onClick={handleWriteSubmit}>
          등록
        </Button>
      </form>
    </div>
  )
}

export default write
