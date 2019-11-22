import React from 'react'
import { Form } from 'react-bootstrap'

const Genre = React.forwardRef(({ genre, setGenre }, ref) => {

  const _onChange = ({ currentTarget }) => {
    
    // написать проверку на введенное значение
    setGenre(currentTarget.value)
  }

  return (
    <div ref={ ref } className="mb-3">
      <Form.Check 
        type="radio"
        name="genre"
        id="m"
        value="m"
        label="Мужчина"
        onChange={ e => _onChange(e) }
        checked={ "m" === genre ? true : false }
        
      />
      <Form.Check
        type="radio"
        name="genre"
        id="w"
        value="w"
        label="Женщина"
        onChange={ e => _onChange(e) }
        checked={ "w" === genre ? true : false }
      />
    </div>
  )
})

export default React.memo(Genre)