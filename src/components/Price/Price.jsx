import React from 'react'
import { addComma } from 'controllers'
import s from './Price.module.scss'

// Takes four props and returns regular price and discounted price.

const Price = ({ regularPrice, offer, discountedPrice, type }) => {
  return (
    <div className={s.root}>
      <p className={s.listingPrice}>
        {offer ? addComma(discountedPrice) : addComma(regularPrice)} gold
        {type === 'rent' && ' per day'}
      </p>
      {offer && (
        <p className={s.discountSaving}>Save {regularPrice - discountedPrice}g</p>
      )}
    </div>
  )
}

export default Price
