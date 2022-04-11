import { useNavigate, useLocation } from 'react-router-dom'
import { OfferIcon, ExploreIcon, PersonOutlineIcon } from 'assets/svg'
import s from './Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Function used to set classNames for active tab
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <footer className={s.root}>
      <nav>
        <ul>
          <li onClick={() => navigate('/')} className={pathMatchRoute('/') && s.active}>
            <ExploreIcon />
            <p>Browse</p>
          </li>
          <li
            onClick={() => navigate('/offers')}
            className={pathMatchRoute('/offers') && s.active}
          >
            <OfferIcon />
            <p>Offers</p>
          </li>
          <li
            onClick={() => navigate('/profile')}
            className={pathMatchRoute('/profile') && s.active}
          >
            <PersonOutlineIcon />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
