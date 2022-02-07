import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'

const Browse = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Browse the Bazaar</p>
      </header>
      <main>
        <Slider />
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/weapons">
            <img
              style={{ objectFit: 'contain', background: 'white' }}
              src="https://firebasestorage.googleapis.com/v0/b/dnd-saddlbag.appspot.com/o/images%2FHt4YbIzxTwhECHlObJN5b3b22FG3-s0rdipas79e81%20(1).png-f68e3262-26f7-405e-a957-19dacf27f742?alt=media&token=d48f871d-60b5-474b-8119-c175121c2024"
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Weapons</p>
          </Link>
          <Link to="/category/wonderous-items">
            <img
              style={{ objectFit: 'contain', background: 'white' }}
              src="https://firebasestorage.googleapis.com/v0/b/dnd-saddlbag.appspot.com/o/images%2FHt4YbIzxTwhECHlObJN5b3b22FG3-lqghfdu5s1f81.png-b4a69cb0-6627-416f-ad1c-655413990e1c?alt=media&token=0558a79a-6107-4dd7-8f90-ca453b3e78a4"
              alt="wonderous items"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Wonderous Items</p>
          </Link>
          <Link to="/category/rings">
            <img
              style={{ objectFit: 'contain', background: 'white' }}
              src="https://firebasestorage.googleapis.com/v0/b/dnd-saddlbag.appspot.com/o/images%2FHt4YbIzxTwhECHlObJN5b3b22FG3-nowsyvkv5gf81.png-71d672f4-eb0c-438c-8834-95fe47ace6e1?alt=media&token=a2f19614-e6ae-408a-b94a-1f755dab37ea"
              alt="rings"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Rings</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Browse
