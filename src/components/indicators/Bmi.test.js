import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import Bmi from './Bmi'

describe('Bmi', () => {
 
  let props = {
    height : 175,
    weight : 80
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Bmi />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Bmi { ...props } />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('есть корректный снимок с корректными переменными', () => {
    const component = TestRenderer.create(<Bmi { ...props } />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('есть корректный снимок без props', () => {
    const component = TestRenderer.create(<Bmi />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})