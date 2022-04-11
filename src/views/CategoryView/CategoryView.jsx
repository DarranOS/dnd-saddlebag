import { Link } from 'react-router-dom'

import { ListingItem, Spinner, ItemGrid, Heading, Container, Button } from 'components'
import s from './CategoryView.module.scss'

// This component takes its props from src/pages/CategoryPage

const CategoryView = ({
  params,
  listings,
  loading,
  lastFetchedListing,
  onFetchMoreListings,
}) => {
  return (
    <Container>
      <div className={s.banner}>
        <Heading>
          {params.categoryName === 'wonderous' && 'Wonderous Items for Sale'}
          {params.categoryName === 'weapons' && 'Weapons for Sale'}
          {params.categoryName === 'rings' && 'Rings for Sale'}
          {params.categoryName === 'staffs' && 'Staffs for Sale'}
          {params.categoryName === 'armors' && 'Armor for Sale'}
          {params.categoryName === 'potions' && 'Potions for Sale'}
          {params.categoryName === 'scrolls' && 'Scrolls for Sale'}
        </Heading>
        <div className={s.buttons}>
          {params.categoryName !== 'weapons' && (
            <Link to={`/category/weapons`}>
              <Button variant="secondary">Weapons</Button>
            </Link>
          )}
          {params.categoryName !== 'armors' && (
            <Link to={`/category/armors`}>
              <Button variant="secondary">Armors</Button>
            </Link>
          )}
          {params.categoryName !== 'rings' && (
            <Link to={`/category/rings`}>
              <Button variant="secondary">Rings</Button>
            </Link>
          )}
          {params.categoryName !== 'staffs' && (
            <Link to={`/category/staffs`}>
              <Button variant="secondary">Staves</Button>
            </Link>
          )}
          {params.categoryName !== 'wonderous' && (
            <Link to={`/category/wonderous`}>
              <Button variant="secondary">Wonderous Items</Button>
            </Link>
          )}
          {params.categoryName !== 'potions' && (
            <Link to={`/category/potions`}>
              <Button variant="secondary">Potions</Button>
            </Link>
          )}
          {params.categoryName !== 'scrolls' && (
            <Link to={`/category/scrolls`}>
              <Button variant="secondary">Scrolls</Button>
            </Link>
          )}
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <ItemGrid>
            {listings.map((listing) => (
              <ListingItem listing={listing.data} key={listing.id} id={listing.id} />
            ))}
          </ItemGrid>
          <br />
          <br />
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load More
            </p>
          )}
        </>
      ) : (
        <Heading el="2">
          No listings for{' '}
          {params.categoryName === 'wonderous' ? 'wonderous items' : params.categoryName}{' '}
          currently available.
        </Heading>
      )}
    </Container>
  )
}

export default CategoryView
