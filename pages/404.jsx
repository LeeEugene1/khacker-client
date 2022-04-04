import React from 'react'
import ErrorHandle from 'src/components/layout/ErrorHandle'

function Error404() {
  return (
    <div>
      <ErrorHandle statusCode={404} />
    </div>
  )
}

export default Error404
