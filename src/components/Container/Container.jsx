import React from 'react'
import styles from './Container.module.scss'

const Container = ({ children }) => {
  return <main className={styles.root}>{children}</main>
}

export default Container
