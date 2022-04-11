import { CategoryView } from 'views'
import { CategoryController } from 'controllers'

const CategoryPage = () => {
  const { listings, loading, onFetchMoreListings, params, lastFetchedListing } =
    CategoryController()

  return (
    <CategoryView
      listings={listings}
      loading={loading}
      onFetchMoreListings={onFetchMoreListings}
      params={params}
      lastFetchedListing={lastFetchedListing}
    />
  )
}

export default CategoryPage
