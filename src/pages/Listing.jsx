import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'
import handshakeIcon from '../assets/svg/handshakeIcon.svg'

function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)

  const navigate = useNavigate()
  const params = useParams()
  const auth = getAuth()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'items', params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log(docSnap.data())
        setListing(docSnap.data())
        setLoading(false)
      }
    }
    fetchListing()
  }, [navigate, params.listingId])

  if (loading) {
    return <Spinner />
  }

  console.log(listing)
  return (
    <main>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: 'contain',
                backgroundColor: 'white',
              }}
              className="swiperSlideDiv"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          setShareLinkCopied(true)
          setTimeout(() => {
            setShareLinkCopied(false)
          }, 2000)
        }}
      >
        <img src={shareIcon} alt="" />
      </div>
      {shareLinkCopied && <p className="linkCopied">Link copied</p>}

      <div className="listingDetails">
        <p className="listingName">{listing.name}</p>
        <p className="listingLocation">{listing.subtitle}</p>
        <p className="listingAgent">Seller's agent - {listing.agent}</p>

        <div className="listingPriceDiv">
          <p className="listingPrice">
            {listing.offer
              ? `              ${listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              gold`
              : `${listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} gold`}
          </p>
          {listing.offer && (
            <p className="discountPrice">
              {listing.regularPrice - listing.discountedPrice}g discount
            </p>
          )}
        </div>
        {listing.trades && (
          <div className="listingTradesDiv">
            <img src={handshakeIcon} fill="yellow" height="24px" alt="trade" />
            <p className="listingTrades">Will trade for {listing.trades}.</p>
          </div>
        )}

        <p className="listingDesc">{listing.desc}</p>
        <p className="listingFlavour">{listing.flavour}</p>

        {auth.currentUser?.uid !== listing.userRef && (
          <Link
            to={`/contact/${listing.userRef}?listingName=${listing.name}&listingLocation=${listing.location}`}
            className="primaryButton"
          >
            Contact Agent
          </Link>
        )}
      </div>
    </main>
  )
}

export default Listing
