import { CreateListingForm, Container, Heading } from 'components'

// import s from './CreateListingView.module.scss'

// This component checks lets you
function CreateListingView({ userId, auth }) {
  return (
    <div className="profile">
      <Container>
        <Heading>Create a Listing</Heading>
        <CreateListingForm userRef={userId} auth={auth} />
      </Container>
    </div>
  )
}

export default CreateListingView
