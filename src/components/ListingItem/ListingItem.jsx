import { Link } from 'react-router-dom'
import { Price } from 'components'
import { EditIcon, DeleteIcon, HandshakeIcon } from 'assets/svg'
import s from './ListingItem.module.scss'

function ListingItem({ listing, id, onDelete, onEdit }) {
  // Destruct props from listing for readability below.
  const {
    type,
    imgUrls,
    name,
    offer,
    discountedPrice,
    regularPrice,
    trades,
    category,
    attunement,
    attunementRule,
    rarity,
  } = listing

  const editedCategory = () => {
    // Formats the category name. Adds the word " item" behind "wonderous".

    const suffix = category === 'wonderous' ? 's item,' : ', '
    return (
      category.slice(0, 1).toUpperCase() + category.slice(1, category.length - 1) + suffix
    )
  }

  // Returns JSX for the ListingItems

  return (
    <Link to={`/category/${type}/${id}`}>
      <li className={s.root}>
        <div className={s.image}>
          <img src={imgUrls} alt={name} />
        </div>
        <div className={s.detailsDiv}>
          <div className={s.nameAndIconsDiv}>
            <p className={s.name}>{name}</p>
            <div className={s.buttonsDiv}>
              {onEdit && <EditIcon onClick={() => onEdit(id)} />}
              {onDelete && <DeleteIcon onClick={() => onDelete(id, name)} />}
            </div>
          </div>

          <Price
            discountedPrice={discountedPrice}
            regularPrice={regularPrice}
            offer={offer}
            type={type}
          />

          <p className={s.infoText}>
            {editedCategory()} {rarity}
            {attunementRule ? (
              <em> (requires attunement {attunementRule}) </em>
            ) : attunement ? (
              <em> (requires attunement) </em>
            ) : null}
          </p>

          <div className={s.infoDiv}>
            {trades !== '' && (
              <>
                <HandshakeIcon className={s.tradeIcon} />{' '}
                <p className={s.infoText}>Trade or services accepted.</p>
              </>
            )}
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ListingItem
