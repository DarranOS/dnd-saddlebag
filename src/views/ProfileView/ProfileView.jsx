import { Link } from 'react-router-dom'

// Controller for data/context
import { useContext } from 'react'
import { ProfileContext } from 'contexts'

import { Container, Heading, Button, ItemGrid, ListingItem } from 'components'
import { ArrowRightIcon, HomeIcon } from 'assets/svg'
import s from './ProfileView.module.scss'

const ProfileView = () => {
  // Imported data from Profile Context
  const {
    onLogout,
    changeDetails,
    onSubmit,
    setChangeDetails,
    name,
    email,
    loading,
    listings,
    onChange,
    onEdit,
    onDelete,
  } = useContext(ProfileContext)

  return (
    <Container>
      <Heading>My Profile</Heading>

      <div className={s.detailsHeader}>
        <div className={s.profileCard}>
          <form>
            <div className={s.profileNameDiv}>
              <input
                type="text"
                id="name"
                className={!changeDetails ? s.profileName : s.profileNameActive}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />

              <p
                className={s.changeDetails}
                onClick={() => {
                  changeDetails && onSubmit()
                  setChangeDetails((prevState) => !prevState)
                }}
              >
                {changeDetails ? 'done' : 'change'}
              </p>
            </div>
            <input
              type="text"
              id="email"
              className={!changeDetails ? s.profileEmail : s.profileEmailActive}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>

        <Link to="/create-listing" className={s.createListing}>
          <HomeIcon />
          <p>Post an item for sale</p>
          <ArrowRightIcon />
        </Link>

        <div onClick={onLogout}>
          <Button>Logout</Button>
        </div>
      </div>

      {!loading && listings?.length > 0 && (
        <>
          <Heading el="2">Your Listings</Heading>

          <ItemGrid>
            {listings.map((listing) => (
              <ListingItem
                key={listing.id}
                listing={listing.data}
                id={listing.id}
                onDelete={() => onDelete(listing.id)}
                onEdit={() => onEdit(listing.id)}
              />
            ))}
          </ItemGrid>
        </>
      )}
    </Container>
  )
}

export default ProfileView
