import React from 'react'

import './Filter.css'

interface Props {
  options: string[]
  current: string
  onChange: (value: string) => void
}

const MyComponent = ({options, current, onChange}: Props) => {
  return (
    <div className='filter'>
      <select value={current} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default MyComponent
