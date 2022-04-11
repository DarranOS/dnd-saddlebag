import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase.config'

import { ListingView } from 'views'

const ListingPage = () => {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'items', params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      }
    }
    fetchListing()
  }, [navigate, params.listingId])

  if (listing !== null) {
    return <ListingView listing={listing} loading={loading} />
  }

  return <p>Hello</p>
}

export default ListingPage
