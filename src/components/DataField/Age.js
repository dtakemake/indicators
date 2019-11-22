import React from 'react'
import { Form } from 'react-bootstrap'

const Age = React.forwardRef(({ age, setAge, unit }, ref) => {

  const _onChange = ({ currentTarget }) => {

    let { value } = currentTarget
          value   = parseInt(value, 10)
     
    // таким способом мы убиваем 2-ух зайцев, 
    // 1 - ввод не числа запрещен и 2 - NaN становится нулем
    setAge(!!value ? value : 0)
  }

  return (
    <Form.Group controlId="formTest" ref={ ref }>
      <Form.Label className="font-weight-bold small mb-1">Возраст, <small className="text-muted mb-1">{ unit }</small></Form.Label>
      {/* если поле пустое, мы сохраняем в state 0, чтобы не нарушать расчеты, но в поле 0 не выводим */}
      <Form.Control type="text" placeholder="" value={ age !== 0 ? age : '' } onChange={ e => _onChange(e) } />
    </Form.Group>
  )
})

export default React.memo(Age)