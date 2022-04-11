// import { useContext } from 'react'
// import { SignInContext } from 'contexts'
// import { Link } from 'react-router-dom'
// import { Border, Button, Container, Heading } from 'components'
// import { LockIcon, PersonIcon, VisibilityIcon } from 'assets/svg'
// import { OAuth } from 'controllers'
// import s from './SignInView.module.scss'

// const SignInView = () => {
//   const { onSubmit, email, onChange, showPassword, password, setShowPassword } =
//     useContext(SignInContext)

//   return (
//     <>
//       <Container>
//         <Heading>Welcome Back!</Heading>
//         <div className={s.root}>
//           <Border variant="column">
//             <form className={s.form} onSubmit={onSubmit}>
//               <div className={s.inputDiv}>
//                 <PersonIcon />
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   id="email"
//                   value={email}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className={s.inputDiv}>
//                 <LockIcon />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Password"
//                   id="password"
//                   value={password}
//                   onChange={onChange}
//                 />
//                 <div onClick={() => setShowPassword((prevState) => !prevState)}>
//                   <VisibilityIcon />
//                 </div>
//               </div>

//               <div className={s.loginButtons}>
//                 <div>
//                   <Button>Sign In</Button>
//                 </div>
//                 <Link to="/forgot-password" className={s.forgotPasswordLink}>
//                   Forgot Password
//                 </Link>
//               </div>
//             </form>
//             <OAuth />
//             <div className={s.signUpDiv}>
//               <Link to="/sign-up">
//                 <Button variant="secondary">Sign Up Instead</Button>
//               </Link>
//             </div>
//           </Border>
//         </div>
//       </Container>
//     </>
//   )
// }

// export default SignInView

import { SigningForm, Container, Heading } from 'components'

import s from './SignInView.module.scss'

const SignInView = () => {
  const page = 'in'
  return (
    <Container>
      <Heading>Welcome to the Bazaar!</Heading>
      <div className={s.root}>
        <SigningForm page={page} />
      </div>
    </Container>
  )
}

export default SignInView
