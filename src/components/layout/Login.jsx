import React from 'react'
import Router from 'next/router'
import Button from 'src/components/styled/button'

function Login() {
  return (
    <li>
      <Button border onClick={() => Router.push('/access')}>
        로그인/회원가입
      </Button>
    </li>
  )
}

export default Login
