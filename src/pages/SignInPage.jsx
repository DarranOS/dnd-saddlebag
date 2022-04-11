import { SignInView } from 'views'
import { SignInProvider } from 'contexts'

const SignInPage = () => {
  return (
    <SignInProvider>
      <SignInView />
    </SignInProvider>
  )
}

export default SignInPage
