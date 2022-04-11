import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoute, Navbar } from 'components'
import {
  BrowsePage,
  // ForgotPasswordPage,
  CreateListingPage,
  // EditListingPage,
  CategoryPage,
  // ContactPage,
  ProfilePage,
  OffersPage,
  SignInPage,
  SignUpPage,
  ListingPage,
} from 'pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from 'App.module.scss'

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Routes>
          <Route path="/" element={<BrowsePage />}></Route>
          <Route path="/offers" element={<OffersPage />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Route>
          <Route path="/category/:categoryName" element={<CategoryPage />}></Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<ListingPage />}
          ></Route>
          <Route path="/create-listing" element={<CreateListingPage />}></Route>
          {/* <Route path="/edit-listing/:listingId" element={<EditListingPage />}></Route>
          <Route path="/contact/:landlordId" element={<ContactPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route> */}
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
