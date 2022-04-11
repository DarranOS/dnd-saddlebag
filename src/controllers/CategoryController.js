// This Controller checks the url params and fetches data from firebase. Returns an object.

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const CategoryController = () => {
  const [listings, setListings] = useState()
  const [lastFetchedListing, setLastFetchedListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, 'items')

        // Create a query
        const q = query(
          listingsRef,
          where('category', '==', params.categoryName),
          orderBy('regularPrice', 'asc'),

          limit(10)
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
        console.log(error)
      }
    }

    fetchListings()
  }, [params.categoryName])

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // Get reference
      const listingsRef = collection(db, 'items')

      // Create a query
      const q = query(
        listingsRef,
        where('category', '==', params.categoryName),
        orderBy('regularPrice', 'asc'),
        startAfter(lastFetchedListing),
        limit(10)
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
      console.log(error)
    }
  }

  return {
    listings,
    loading,
    onFetchMoreListings,
    params,
    lastFetchedListing,
  }
}

export default CategoryController
