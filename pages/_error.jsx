import React from 'react'
import ErrorHandle from 'src/components/layout/ErrorHandle'

function Error({ statusCode }) {
  return (
    <div>
      <ErrorHandle statusCode={statusCode} />
    </div>
  )
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
