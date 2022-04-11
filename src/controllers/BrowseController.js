// This controller returns an array that is passed to the BrowsePage component.

import images from 'assets/images'

export const BrowseController = () => {
  const categories = [
    {
      name: 'Weapons',
      alt: 'weapons',
      link: '/category/weapons',
      src: images.weapon,
    },
    {
      name: 'Armor',
      alt: 'armor',
      link: '/category/armors',
      src: images.armor,
    },
    {
      name: 'Rings',
      alt: 'rings',
      link: '/category/rings',
      src: images.ring,
    },
    {
      name: 'Wonderous Items',
      alt: 'wonderous items',
      link: '/category/wonderous',
      src: images.wonderous,
    },
    {
      name: 'Staves, Rods and Wands',
      alt: 'staves and rods',
      link: '/category/staffs',
      src: images.staff,
    },
    {
      name: 'Scrolls',
      alt: 'scrolls',
      link: '/category/scrolls',
      src: images.scroll,
    },
    {
      name: 'Potions',
      alt: 'potions',
      link: '/category/potions',
      src: images.potion,
    },
  ]

  return categories
}

export default BrowseController
