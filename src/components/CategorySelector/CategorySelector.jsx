import { Link } from 'react-router-dom'
import { Heading } from 'components'
import s from './CategorySelector.module.scss'

const CategorySelector = ({ src, alt, link, name }) => {
  return (
    <Link to={link}>
      <div className={s.root}>
        <img className={s.image} src={src} alt={alt} />
        <Heading el="2">{name}</Heading>
      </div>
    </Link>
  )
}

export default CategorySelector
