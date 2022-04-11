import { Link } from 'react-router-dom'
import { Border, Button } from 'components'
import { LockIcon, PersonIcon, VisibilityIcon } from 'assets/svg'
import { OAuth } from 'controllers'
import s from './SigningForm.module.scss'

// Context
import { useContext } from 'react'
import { SignUpContext, SignInContext } from 'contexts'

const SigningForm = ({ page }) => {
  const context = page === 'in' ? SignInContext : SignUpContext

  const { showPassword, setShowPassword, onChange, onSubmit, email, password } =
    useContext(context)

  return (
    <Border variant="column">
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.inputDiv}>
          <PersonIcon />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
            autoComplete="username"
          />
        </div>

        <div className={s.inputDiv}>
          <LockIcon />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            id="password"
            autoComplete={page === 'in' ? 'current-password' : 'new-password'}
            value={password}
            onChange={onChange}
          />
          <div onClick={() => setShowPassword((prevState) => !prevState)}>
            <VisibilityIcon />
          </div>
        </div>

        <div className={s.loginButtons}>
          <div>
            <Button>{page === 'in' ? 'Sign in' : 'Sign up'}</Button>
          </div>
          {page === 'in' ? (
            <Link to="/forgot-password" className={s.forgotPasswordLink}>
              Forgot Password
            </Link>
          ) : null}
        </div>
      </form>
      <OAuth />
      <div className={s.signUpDiv}>
        <Link to={page === 'in' ? '/sign-up' : '/sign-in'}>
          <Button variant="secondary">Sign {page === 'in' ? 'up' : 'in'} instead</Button>
        </Link>
      </div>

      <div className={s.instructions}>
        <p>Test credentials:</p>
        <p>Email: balthazar@bazaar.com</p>
        <p>Password: bazaar1</p>
      </div>
    </Border>
  )
}

export default SigningForm
