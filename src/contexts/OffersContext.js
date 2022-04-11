import { useEffect, useState, createContext } from 'react'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from 'firebase.config'
import { toast } from 'react-toastify'

// This context handle the items displayed on the offers page by fetching data from Firebase
const OffersContext = createContext({})

export const OffersProvider = ({ children }) => {
  const [listings, setListings] = useState()
  const [loading, setLoading] = useState(true)
  const [lastFetchedListing, setLastFetchedListing] = useState(null)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, 'items')

        // Create a query
        const q = query(
          listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(6)
        )

        // execute query
        const querySnap = await getDocs(q)
        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setLastFetchedListing(lastVisible)
        const listings = []
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error('Could not fetch listings')
      }
    }

    fetchListings()
  }, [])

  // Pagination
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, 'items')

      // Create a query
      const q = query(
        listingsRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(6)
      )

      // execute query
      const querySnap = await getDocs(q)
      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      setLastFetchedListing(lastVisible)
      const listings = []
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings((prevState) => [...prevState, ...listings])
      setLoading(false)
    } catch (error) {
      toast.error('Could not fetch listings')
    }
  }
  return (
    <OffersContext.Provider
      value={{ loading, listings, lastFetchedListing, onFetchMoreListings }}
    >
      {children}
    </OffersContext.Provider>
  )
}
export default OffersContext
