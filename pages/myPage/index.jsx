import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { FormContext } from '@/pages/_app'
import FormInput from 'src/components/layout/FormInput'
import Button from 'src/components/styled/button'
import axiosWrapper from 'src/axiosWrapper'
import { HOST, USER_UPDATE } from 'src/store/modules/user'
import useLocalStorage from 'src/hooks/useLocalStorage'

function myPage() {
  const initialErrorMessage = {
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  }
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage)

  const { formData, setFormData } = useContext(FormContext)
  function changeState(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  let userInfo = null
  useEffect(() => {
    if (typeof window !== 'undefined') {
      userInfo = JSON.parse(localStorage.getItem('userInfo'))
      setFormData({
        ...formData,
        id: userInfo.id,
        email: userInfo.email,
        nickname: userInfo.nickname,
      })
    }
  }, [])
  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    const url = `${HOST}/${USER_UPDATE}`
    const requestBody = {
      email: formData.email,
      id: formData.id,
      nickname: formData.nickname,
      password: formData.password,
    }
    axiosWrapper('put', url, requestBody).then((data) => {
      useLocalStorage('userInfo', data.userInfo)
    })
    alert('회원정보가 수정되었습니다.')
  }
  return (
    <section>
      <div className="tab">
        <Head>
          <title>마이페이지</title>
        </Head>
        <div className="tab__myPage">
          <form onSubmit={(e) => handleUpdateSubmit(e)}>
            <FormInput
              label="이메일"
              id="email"
              name="email"
              type="text"
              placeholder="example@email.com"
              onChange={changeState}
              value={formData.email}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              disabled
            />
            <FormInput
              label="닉네임"
              id="nickname"
              name="nickname"
              type="text"
              placeholder="2자이상 10자 미만"
              onChange={changeState}
              value={formData.nickname}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <FormInput
              label="비밀번호"
              id="password"
              name="password"
              type="password"
              placeholder="특수문자포함 8자이상"
              onChange={changeState}
              value={formData.password}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <FormInput
              label="비밀번호 확인"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="비밀번호 다시 입력"
              value={formData.confirmPassword}
              onChange={changeState}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <div className="modal__button">
              <Button fullSize type="submit">
                회원정보수정
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default myPage
