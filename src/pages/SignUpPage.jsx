import { SignUpProvider } from 'contexts'
import { SignUpView } from 'views'

const SignUpPage = () => {
  return (
    <SignUpProvider>
      <SignUpView />
    </SignUpProvider>
  )
}

export default SignUpPage
