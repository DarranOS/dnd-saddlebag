import React from 'react'
import s from './Heading.module.scss'
import cn from 'classnames'

// This component returns a styled h1 by default or can return a h2 with the el="h2" prop.

const Heading = ({ children, el = '1' }) => {
  const CustomHeading = `h${el}`
  const rootClassName = cn(s.root, { [s.h2]: el === 'h2' })
  return (
    <header>
      <CustomHeading className={rootClassName}>{children}</CustomHeading>
    </header>
  )
}

export default Heading
