import { createContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

const SignInContext = createContext({})

export const SignInProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault()

      const auth = getAuth()

      const userCredentials = await signInWithEmailAndPassword(auth, email, password)

      if (userCredentials.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Email or password wrong')
    }
  }

  return (
    <SignInContext.Provider
      value={{ onSubmit, email, onChange, showPassword, password, setShowPassword }}
    >
      {children}
    </SignInContext.Provider>
  )
}

export default SignInContext
