import React from 'react'

import './Filter.css'

interface Option {
  name: string
  value: string
}

interface Props {
  options: Option[]
  current: string
  onChange: (value: string) => void
}

const MyComponent = ({options, current, onChange}: Props) => {
  return (
    <div className='filter'>
      <select value={current} onInput={e => onChange(e.target.value)}>
        {options.map(({ name, value }) => (
          <option value={value} key={value}>{name}</option>
        ))}
      </select>
    </div>
  )
}

export default MyComponent
