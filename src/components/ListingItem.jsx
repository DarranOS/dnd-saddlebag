import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'
import handshakeIcon from '../assets/svg/handshakeIcon.svg'

import React from 'react'

function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imgUrls} alt={listing.name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <p className="categoryListingName">{listing.name}</p>
          <div className="categoryListingPriceDiv">
            <p className="categoryListingPrice">
              {listing.offer
                ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : listing.regularPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              gold
              {listing.type === 'rent' && ' per day'}
            </p>
            {listing.offer && (
              <p className="categoryListingDiscountSaving">
                Save {listing.regularPrice - listing.discountedPrice}g
              </p>
            )}
          </div>
          {listing.subtitle.includes('attunement') && (
            <p className="categoryListingInfoAttunement">Requires Attunement.</p>
          )}
          <div className="categoryListingInfoDiv">
            {listing.trades !== '' && (
              <img src={handshakeIcon} height="24px" alt="trade" />
            )}
            {listing.trades !== '' && (
              <p className="categoryListingInfoText">
                Trade or services accepted in lieu.
              </p>
            )}
          </div>
          <div className="editDeleteButtons">
            {onEdit && (
              <EditIcon
                className="editIcon"
                fill="rgb(231,76,60)"
                onClick={() => onEdit(id)}
              />
            )}
            {onDelete && (
              <DeleteIcon
                className="removeIcon"
                fill="rgb(231,76,60)"
                onClick={() => onDelete(listing.id, listing.name)}
              />
            )}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ListingItem
