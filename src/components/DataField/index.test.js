import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import DataField from './'

describe('DataField', () => {
  
  it('renders without crashing', () => {
    let div = document.createElement('div')
    ReactDOM.render(<DataField className="DataFieldTest" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing Age', () => {
    let div = document.createElement('div')
    ReactDOM.render(<DataField.Age className="DataFieldTestAge" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing Genre', () => {
    let div = document.createElement('div')
    ReactDOM.render(<DataField.Genre className="DataFieldTestGenre" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing Length', () => {
    let div = document.createElement('div')
    ReactDOM.render(<DataField.Length className="DataFieldTestLength" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without crashing Weight', () => {
    let div = document.createElement('div')
    ReactDOM.render(<DataField.Weight className="DataFieldTestWeight" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('есть корректный снимок', () => {
    let component = TestRenderer.create(<DataField className="DataFieldTest" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('есть корректный снимок', () => {
    let component = TestRenderer.create(<DataField.Age className="DataFieldTestAge" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('есть корректный снимок', () => {
    let component = TestRenderer.create(<DataField.Genre className="DataFieldTestGenre" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('есть корректный снимок', () => {
    let component = TestRenderer.create(<DataField.Length className="DataFieldTestLength" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('есть корректный снимок', () => {
    let component = TestRenderer.create(<DataField.Weight className="DataFieldTestWeight" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})