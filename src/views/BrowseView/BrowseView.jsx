import { CategorySelector, Container, Heading } from 'components'
import s from './BrowseView.module.scss'

const BrowseView = ({ categories }) => {
  return (
    <div>
      <Container>
        <Heading>Browse the Bazaar</Heading>

        <div className={s.categories}>
          {categories.map((category) => (
            <CategorySelector
              key={category.name}
              link={category.link}
              alt={category.alt}
              src={category.src}
              name={category.name}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default BrowseView
