import React, { FC } from 'react'
import './Error.css'

const Error: FC = ({ children }) => (
  <div className='login__error'>
    <p>{children}</p>
  </div>
)

export default Error
