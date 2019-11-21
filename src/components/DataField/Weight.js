import React from 'react'
import { Form } from 'react-bootstrap'

const Weight = React.forwardRef(({ weight, setWeight, unit }, ref) => {

  const _onChange = ({ currentTarget }) => {
    
    // написать проверку на введенное значение
    setWeight(parseInt(currentTarget.value, 10))
  }

  return (
    <Form.Group controlId="formTest" ref={ ref }>
      <Form.Label className="font-weight-bold small mb-1">Вес</Form.Label>
      <Form.Control type="text" placeholder="" value={ weight } onChange={ e => _onChange(e) } />
      <Form.Text className="text-muted">
        { unit }
      </Form.Text>
    </Form.Group>
  )
})

export default React.memo(Weight)