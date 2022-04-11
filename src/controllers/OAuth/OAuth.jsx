import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from 'firebase.config'
import { toast } from 'react-toastify'
import { GoogleIcon } from 'assets/svg'
import s from './OAuth.module.scss'

function OAuth() {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error("Couldn't authorise with google")
    }
  }

  return (
    <div className={s.root}>
      <p>Or sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
      <div className={s.socialIcon} onClick={onGoogleClick}>
        <GoogleIcon />
      </div>
    </div>
  )
}

export default OAuth
