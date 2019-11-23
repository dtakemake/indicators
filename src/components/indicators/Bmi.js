import React from 'react'

/*
* Индекс массы тела
* @param height сантиметры
* @param weight килограммы
* @return bmi float 00.00
*/

const Bmi = ({ height = 0, weight = 0 }) => {

  /* делаем проверку только на рост, 
  чтобы не делить на ноль и мучатсья с проблемами рассчетов */

  return  <h3>ИМТ - { (height && (weight / Math.pow((height / 100), 2)).toFixed(2)) || '0.00' }</h3>
}

export default React.memo(Bmi)