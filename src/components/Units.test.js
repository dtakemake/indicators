import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import Units from './Units'

describe('Units', () => {
 
  let props = {
    units: {
      "kg" : "кг", 
      "lb" : "фунты"
    }, 
    unit: "kg",
    setUnit() {}, 
    variant: "warning"
  }
  
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Units { ...props } />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('есть корректный снимок', () => {
    const component = TestRenderer.create(<Units { ...props } />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})