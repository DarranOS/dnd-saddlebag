import Ticker from 'react-ticker'

import React from 'react'

const Marquee = ({ children }) => {
  return (
    <div>
      <Ticker>{() => <div>{children}</div>}</Ticker>
    </div>
  )
}

export default Marquee
