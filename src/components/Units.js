import React from 'react'

import {
  ButtonGroup,
  Button
} from 'react-bootstrap'

const Units = ({ 
  
  /* 
  * @param { key : value } доступные единицы размера
  */
  units,

  /*
  * @param string { key } текущая единица размера
  */
  unit, 

  /*
  * @param function изменить единицу измерения
  */
  setUnit, 

  /* 
  * @param string - класс кнопок
  */
  variant = "secondary"

}) => {
  // выберем все ключи измерений
  const keys = Object.keys(units)

  return keys ? 
    <ButtonGroup size="sm">
      {keys.map(key => key !== unit ?
        <Button variant={variant} key={key} onClick={() => setUnit(key)}>{units[key]}</Button>
        :
        <Button variant={variant} key={key} disabled="disabled">{units[key]}</Button>)}
    </ButtonGroup>
    :
    null
  }

export default React.memo(Units)