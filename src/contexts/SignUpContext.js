import { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from 'firebase.config'
import { toast } from 'react-toastify'

const SignUpContext = createContext({})

export const SignUpProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { email, password, name } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('Submit')
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  return (
    <SignUpContext.Provider value={{ showPassword, setShowPassword, onChange, onSubmit }}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpContext
