import { CreateListingView } from 'views'

import { useState, useRef, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const CreateListingPage = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)
  const [userId, setUserId] = useState(null)

  // When component mounts,
  // If user is signed in, Firebase returns "user" object.
  // Else React Router navigates to sign in page.
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid)
        } else {
          navigate('/sign-in')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  return <CreateListingView userId={userId} auth={auth} />
}

export default CreateListingPage
