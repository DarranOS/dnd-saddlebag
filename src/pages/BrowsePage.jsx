import { BrowseView } from 'views'
import { BrowseController } from 'controllers'

// This page component passes an Array returned from the Browse controller to the BrowseView component.

const BrowsePage = () => {
  // BrowseController returns an array with the names, links and images.src for the category selectors.
  const categories = BrowseController()
  return <BrowseView categories={categories} />
}

export default BrowsePage
