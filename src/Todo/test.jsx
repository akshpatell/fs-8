import React, { memo } from 'react'

// eslint-disable-next-line react/prop-types
function Test({user}) {
  return (
    // eslint-disable-next-line react/prop-types
    <div>{user?.name}</div>
  )
}

export default memo(Test)