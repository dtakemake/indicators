import React from 'react'

const Weight = React.forwardRef(({ weight, setWeight, unit }, ref) => {

  return <span ref={ ref }>Вес { weight } { unit }</span>
})

export default React.memo(Weight)