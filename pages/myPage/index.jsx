import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { FormContext } from '@/pages/_app'
import FormInput from 'src/components/layout/FormInput'
import Button from 'src/components/styled/button'

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
        email: userInfo.email,
        nickname: userInfo.nickname,
      })
    }
  }, [])
  const handleUpdateSubmit = (e) => {
    alert('dd')
  }
  return (
    <section>
      <div className="tab">
        <Head>
          <title>마이페이지</title>
        </Head>
        <div className="tab__form active">
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
