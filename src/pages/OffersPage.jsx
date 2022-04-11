import { OffersView } from 'views'
import { OffersProvider } from 'contexts'
const OffersPage = () => {
  return (
    <OffersProvider>
      <OffersView />
    </OffersProvider>
  )
}

export default OffersPage
