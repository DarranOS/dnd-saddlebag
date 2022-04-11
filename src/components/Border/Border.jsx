import s from './Border.module.scss'
import cn from 'classnames'

const Border = ({ children, variant = 'row' }) => {
  const rootClassName = cn(s.root, { [s.column]: variant === 'column' })

  return <div className={rootClassName}>{children}</div>
}

export default Border
