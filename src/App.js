import React, { useState } from 'react'
import DataField from './components/DataField/'
import Units from './components/Units'
import {
  Container,
  Row, 
  Col
} from 'react-bootstrap'

// indicators
import Bmi from './components/indicators/Bmi'

import { 
  lengthUnits, 
  weightUnits 
} from './config/units'

const App = () => {
  // единицы измерения
  const [lengthUnit, setLengthUnit] = useState(lengthUnits.default)
  const [weightUnit, setWeightUnit] = useState(weightUnits.default)

  // данные пользователя
  const [genre, setGenre] = useState('m')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  return (
    <Container>
      <Row>
        <Col xs={6}>
          {/* { поля для ввода данных } */}
          <DataField.Genre genre={ genre } setGenre={ setGenre } />
          <DataField.Age age={ age } setAge={ setAge } unit="лет" />
          <DataField.Length length={ height } setLength={ setHeight } unit={ lengthUnits.units[lengthUnit] } />
          <DataField.Weight weight={ weight } setWeight={ setWeight } unit={ weightUnits.units[weightUnit] } />

          {/* { индексы } */}

          {/* { инлдекс массы тела } */}
          <Bmi height={ height } weight={ weight } />

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
