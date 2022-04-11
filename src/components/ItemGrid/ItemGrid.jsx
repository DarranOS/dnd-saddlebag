import React from 'react'
import s from './ItemGrid.module.scss'

const ItemGrid = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default ItemGrid
