import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function ErrorHandle({ statusCode }) {
  return (
    <section>
      <Head>
        <title>{statusCode} 페이지</title>
      </Head>
      <h3>{statusCode} 에러</h3>
      <p>죄송합니다. 페이지를 찾을 수 없습니다. 잠시후 다시 이용해주세요.</p>
      <Link href="/">홈으로 이동하기</Link>
    </section>
  )
}

export default ErrorHandle
