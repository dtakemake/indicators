import React from 'react'
import Age from './Age'
import Genre from './Genre'
import Length from './Length'
import Weight from './Weight'

const DataField = React.forwardRef(({ as: Component = 'div', ...props }, ref) => <Component { ...props } ref={ ref } /> )

DataField.Age = Age
DataField.Genre = Genre
DataField.Length = Length
DataField.Weight = Weight

export default DataField