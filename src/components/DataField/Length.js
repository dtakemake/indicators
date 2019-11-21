import React from 'react'

const Length = React.forwardRef(({ length, setLength, unit }, ref) => {

  return <span ref={ ref }>Длина - { length } { unit }</span>
})

export default React.memo(Length)