import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import axiosWrapper from 'src/axiosWrapper'
import Button from 'src/components/styled/button'
import FormInput from 'src/components/layout/FormInput'
import { HOST, LOGIN, USER_LOGIN, USER_SIGNUP } from 'src/store/modules/user'
import { FormContext } from 'pages/_app'

function access() {
  const { formData, setFormData } = useContext(FormContext)
  function changeState(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const initialErrorMessage = {
    id: '',
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
  }
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage)

  const dispatch = useDispatch()
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const url = `${HOST}/${USER_LOGIN}`
    const requestBody = {
      email: formData.email,
      password: formData.password,
    }
    const login = (data) => {
      if (!data) {
        alert('등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력하였습니다')
        return false
      }
      window.location.href = '/'
      dispatch(
        LOGIN({
          is_logined: data.is_logined,
        }),
      )
    }
    axiosWrapper('POST', url, requestBody).then(login)
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    const url = `${HOST}/${USER_SIGNUP}`
    const requestBody = {
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
    }
    axiosWrapper('POST', url, requestBody)
    alert('회원가입이 완료되었습니다.')
    window.location.href = '/'
  }
  const [toggleActive, setToggleActive] = useState(0)

  const toggletab = (index) => {
    setFormData({
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    })
    setErrorMessage(initialErrorMessage)
    setToggleActive(index)
  }
  return (
    <section>
      <div className="tab">
        <div className="tab__links">
          <button className={toggleActive === 0 ? 'tab__links--button active' : 'tab__links--button'} onClick={() => toggletab(0)}>
            로그인
          </button>
          <button className={toggleActive === 1 ? 'tab__links--button active' : 'tab__links--button'} onClick={() => toggletab(1)}>
            회원가입
          </button>
        </div>
        <div className={toggleActive === 0 ? 'tab__form active' : 'tab__form'}>
          <form onSubmit={(e) => handleLoginSubmit(e)}>
            <FormInput
              label="이메일"
              id="email"
              name="email"
              type="text"
              placeholder="example@email.com"
              value={formData.email}
              onChange={changeState}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <FormInput
              label="비밀번호"
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={changeState}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <div className="modal__button">
              <Button type="submit" fullSize>
                로그인
              </Button>
            </div>
          </form>
        </div>

        <div className={toggleActive === 1 ? 'tab__form active' : 'tab__form'}>
          <form onSubmit={(e) => handleSignUpSubmit(e)}>
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
                회원가입
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default access
