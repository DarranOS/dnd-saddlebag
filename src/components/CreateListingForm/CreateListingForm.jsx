import { useState } from 'react'
import { firebaseUpload } from 'controllers'
import { Spinner, Button } from 'components'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// Styling from scss module
import s from './CreateListingForm.module.scss'

const CreateListingForm = ({ userRef, auth }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    name: '',
    desc: [],
    flavour: [],
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    trades: '',
    agent: '',
    location: '',
    attunement: false,
    attunementRule: '',
    rarity: '',
  })

  const {
    category,
    subCategory,
    name,
    desc,
    flavour,
    offer,
    regularPrice,
    discountedPrice,
    images,
    trades,
    agent,
    location,
    attunement,
    attunementRule,
    rarity,
  } = formData

  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    if (e.target.id.includes('desc')) {
      const index = Number(e.target.id.slice(4))

      setFormData((prevState) => ({
        ...prevState,
        formData: {
          desc: [...prevState.desc, (desc[index] = e.target.value)],
        },
      }))
      return
    }

    if (e.target.id.includes('flavour')) {
      const index = Number(e.target.id.slice(7))

      setFormData((prevState) => ({
        ...prevState,
        formData: {
          flavour: [...prevState.flavour, (flavour[index] = e.target.value)],
        },
      }))
      return
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }))
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    if (Number(discountedPrice) >= Number(regularPrice)) {
      setLoading(false)
      toast.error('Discounted price needs to be less than regular price')
      return
    }

    if (images.length > 1) {
      setLoading(false)
      toast.error('Max of one image')
      return
    }

    const ref = await firebaseUpload({ formData, userRef, auth, loading, setLoading })

    navigate(ref)
    setLoading(false)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <form onSubmit={onSubmit} className={s.root}>
      <div className={s.formSection}>
        <div className={s.formDiv}>
          <label>Item</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onMutate}
            maxLength="100"
            minLength="2"
            required
          />
        </div>
        <div className={s.formDiv}>
          <label htmlFor="category">Item Category</label>
          <select
            value={category}
            onChange={onMutate}
            required
            name="category"
            id="category"
          >
            <option value="weapons">Weapon</option>
            <option value="armors">Armor</option>
            <option value="wonderous">Wonderous Item</option>
            <option value="rings">Ring</option>
            <option value="staffs">Staff</option>
            <option value="potions">Potion</option>
            <option value="scrolls">Scroll</option>
          </select>
        </div>

        <div className={s.formDiv}>
          <label htmlFor="subcategory">Sub-category</label>
          <input
            value={subCategory}
            onChange={onMutate}
            name="subCategory"
            id="subCategory"
            type="text"
          ></input>
        </div>

        <div className={s.formDiv}>
          <label>Rarity</label>
          <input
            type="text"
            id="rarity"
            value={rarity}
            onChange={onMutate}
            maxLength="100"
            required
          />
        </div>

        <div className={s.formDiv}>
          <label htmlFor="attunement">Requires Attunement?</label>
          <div className={s.formOffer}>
            <button
              className={attunement ? s.active : ''}
              type="button"
              name="attunement"
              id="attunement"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={!attunement && attunement !== null ? s.active : ''}
              name="attunement"
              type="button"
              id="attunement"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>
        </div>

        <div className={s.formDiv}>
          {attunement ? (
            <div>
              <label>Attunement Conditions</label>
              <input
                className="formInputSmall"
                type="text"
                id="attunementRule"
                name="attunementRule"
                value={attunementRule}
                onChange={onMutate}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className={s.formSection}>
        <div className={s.formDiv}>
          <label>Description</label>
          <textarea
            id="desc0"
            value={desc[0]}
            onChange={onMutate}
            maxLength="5000"
            minLength="10"
            required
            rows="6"
          />
        </div>

        {desc[0] ? (
          <div className={s.formDiv}>
            <label>Description 2</label>
            <textarea
              id="desc1"
              value={desc[1]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {desc[1] ? (
          <div className={s.formDiv}>
            <label>Description 3</label>
            <textarea
              id="desc2"
              value={desc[2]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {desc[2] ? (
          <div className={s.formDiv}>
            <label>Description 4</label>
            <textarea
              id="desc3"
              value={desc[3]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {desc[3] ? (
          <div className={s.formDiv}>
            <label>Description 5</label>
            <textarea
              id="desc4"
              value={desc[4]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {desc[4] ? (
          <div className={s.formDiv}>
            <label>Description 6</label>
            <textarea
              id="desc5"
              value={desc[5]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
      </div>

      <div className={s.formSection}>
        <div className={s.formDiv}>
          <label>History & Legacy</label>
          <textarea
            id="flavour0"
            value={flavour[0]}
            onChange={onMutate}
            maxLength="5000"
            minLength="10"
            required
            rows="6"
          />
        </div>

        {flavour[0] ? (
          <div className={s.formDiv}>
            <label>History & Legacy 2</label>
            <textarea
              id="flavour1"
              value={flavour[1]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {flavour[1] ? (
          <div className={s.formDiv}>
            <label>History & Legacy 3</label>
            <textarea
              id="flavour2"
              value={flavour[2]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {flavour[2] ? (
          <div className={s.formDiv}>
            <label>History & Legacy 4</label>
            <textarea
              id="flavour3"
              value={flavour[3]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        {flavour[3] ? (
          <div className={s.formDiv}>
            <label>History & Legacy 5</label>
            <textarea
              id="flavour4"
              value={flavour[4]}
              onChange={onMutate}
              maxLength="1500"
              minLength="10"
              rows="6"
            />
          </div>
        ) : null}
        <div className={s.formDiv}>
          <label htmlFor="images">Image Upload</label>
          <label>
            <input
              className={s.button}
              type="file"
              id="images"
              onChange={onMutate}
              max="1"
              accept=".jpg,.png,.jpeg,.webp"
              required
            />
          </label>
        </div>
      </div>

      <div className={s.formSection}>
        <div className={s.formDiv}>
          <label>Seller's Agent</label>
          <input type="text" id="agent" value={agent} onChange={onMutate} required />
        </div>

        <div className={s.formDiv}>
          <label>Agent's Location</label>
          <input type="text" id="location" value={location} onChange={onMutate} hidden />
        </div>

        <div className={s.formDiv}>
          <label>Will Trade for..</label>
          <input id="trades" value={trades} onChange={onMutate} />
        </div>

        <div className={s.formDiv}>
          <label>Regular Price</label>

          <input
            className="formInputSmall"
            type="number"
            id="regularPrice"
            value={regularPrice}
            onChange={onMutate}
            min="1"
            max="750000000"
            required
          />
        </div>

        <div className={s.formDiv}>
          <label>Special Offer?</label>
          <div className={s.formOffer}>
            <button
              className={offer ? s.active : ''}
              type="button"
              id="offer"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={!offer && offer !== null ? s.active : ''}
              type="button"
              id="offer"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>
        </div>

        <div className={s.formDiv}>
          {offer ? (
            <div>
              <label>Discounted Price</label>
              <input
                className="formInputSmall"
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required={offer}
              />
            </div>
          ) : (
            <>{''} </>
          )}
        </div>
      </div>

      <div className={s.formDiv}>
        <div className={s.reverse}>
          <Button
            disabled={
              name === '' ||
              images === {} ||
              rarity === '' ||
              desc === [] ||
              regularPrice < 1 ||
              agent === '' ||
              location === ''
            }
            type="submit"
          >
            Create Listing
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CreateListingForm

// type,
// imgUrls,
// name,
// offer,
// discountedPrice,
// regularPrice,
// subtitle,
// trades,
// category,
// subCategory,
// desc,
// flavour,
// agent,
// location,
// attunement,
// attunementRule,
// rarity,
