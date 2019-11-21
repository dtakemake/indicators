import React, { useState } from 'react'
import Units from './components/Units'

import { 
  lengthUnits, 
  weightUnits 
} from './config/units'

import {
  Container,
  Row, 
  Col
} from 'react-bootstrap'

const App = () => {
  // единицы измерения
  const [lengthUnit, setLengthUnit] = useState(lengthUnits.default)
  const [weightUnit, setWeightUnit] = useState(weightUnits.default)

  // данные пользователя
  //const [genre, setGenre] = useState('m')
  //const [height, setHeight] = useState(175)
  //const [weight, setGenre] = useState(90)
  //const [age, setAge] = useState(18)

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <p className="text-muted">Длина в { lengthUnits.units[lengthUnit] }</p>
          <p className="text-muted">Вес в { weightUnits.units[weightUnit] }</p>
        </Col>
        <Col xl={6} className="p-4">
          <div className="d-flex align-items-center justify-content-end">
            <Units units={lengthUnits.units} unit={lengthUnit} setUnit={setLengthUnit} variant="warning" />
            <div className="px-2"></div>
            <Units units={weightUnits.units} unit={weightUnit} setUnit={setWeightUnit} variant="info" />
          </div>
        </Col>
      </Row>
  </Container>
  )
}
  
export default React.memo(App)
