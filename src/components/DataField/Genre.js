import React from 'react'

const Genre = React.forwardRef(({ ...props }, ref) => {

  return <span ref={ ref }>Пол</span>
})

export default React.memo(Genre)