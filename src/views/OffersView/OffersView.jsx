import { useContext } from 'react'
import { OffersContext } from 'contexts'
import { ListingItem, Spinner, Container, Heading, Button, ItemGrid } from 'components'

// This component takes the offers context and returns listings with special offers. // It doesn't have unique CSS.

const OffersView = () => {
  const { loading, listings, lastFetchedListing, onFetchMoreListings } =
    useContext(OffersContext)

  return (
    <Container>
      <Heading>Special Offers</Heading>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <ItemGrid>
            {listings.map((listing) => (
              <ListingItem listing={listing.data} key={listing.id} id={listing.id} />
            ))}
          </ItemGrid>

          {lastFetchedListing && (
            <div onClick={onFetchMoreListings}>
              <Button>Load More</Button>
            </div>
          )}
        </>
      ) : (
        <p>The are no special offers at the moment.</p>
      )}
    </Container>
  )
}

export default OffersView
