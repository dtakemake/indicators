import React from 'react'

const Age = React.forwardRef(({ ...props }, ref) => {

  return <span ref={ ref }>Возраст</span>
})

export default React.memo(Age)