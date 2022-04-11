import { SigningForm, Container, Heading } from 'components'
import s from './SignUpView.module.scss'

const SignUpView = () => {
  const page = 'up'
  return (
    <Container>
      <Heading>Welcome to the Bazaar!</Heading>
      <div className={s.root}>
        <SigningForm page={page} />
      </div>
    </Container>
  )
}

export default SignUpView
