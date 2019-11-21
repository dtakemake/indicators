import React, { useState } from 'react'
import DataField from './components/DataField/'
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
  const [genre, setGenre] = useState('m')
  const [age, setAge] = useState(18)
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(90)

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <DataField.Genre genre={ genre } setGenre={ setGenre } />
          <DataField.Age age={ age } setAge={ setAge } />
          <DataField.Length length={ height } setLength={ setHeight } unit={ lengthUnits.units[lengthUnit] } />
          <DataField.Weight weight={ weight } setWeight={ setWeight } unit={ weightUnits.units[weightUnit] } />
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
