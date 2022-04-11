import { Spinner, Heading, Container, Price } from 'components'
import { HandshakeIcon } from 'assets/svg'
import s from './ListingView.module.scss'

function ListingView({ listing, loading }) {
  const {
    name,
    imgUrls,
    category,
    subCategory,
    agent,
    location,
    discountedPrice,
    regularPrice,
    offer,
    type,
    trades,
    desc,
    flavour,
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

  if (loading) {
    return <Spinner />
  }

  return (
    <Container>
      <div className={s.root}>
        <div className={s.image}>
          <img src={imgUrls} alt={name} />
        </div>

        <div className={s.details}>
          <Heading>{name}</Heading>

          <div className={s.subtitle}>
            {subCategory
              ? `${editedCategory()} (${subCategory}) ${rarity}`
              : `${editedCategory()} ${rarity}`}
            {attunementRule
              ? ` (requires attunement by ${attunementRule})`
              : attunement
              ? ' (requires Attunement)'
              : null}
          </div>

          <div className={s.sellerInfo}>
            <p>
              Agent: {agent} at {location}
            </p>
          </div>
          <div className={s.priceDiv}>
            <Price
              discountedPrice={discountedPrice}
              regularPrice={regularPrice}
              offer={offer}
              type={type}
            />
          </div>
          {trades && (
            <div className={s.trades}>
              <HandshakeIcon />

              <p>Will trade for {trades}.</p>
            </div>
          )}

          <div>
            {desc.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className={s.flavourText}>
            {flavour.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingView
