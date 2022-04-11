import s from './Button.module.scss'
import cn from 'classnames'

import React from 'react'

const Button = ({ children, type, variant = 'primary', disabled = false }) => {
  const rootClassName = cn(
    s.root,
    { [s.error]: variant === 'error' },
    { [s.secondary]: variant === 'secondary' }
  )
  return (
    <button disabled={disabled} type={type} className={rootClassName}>
      {children}
    </button>
  )
}

export default Button
