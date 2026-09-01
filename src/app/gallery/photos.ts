export type GalleryPhoto = {
  src: string
  alt: string
  category: string
  title: string
}

// Real photos only. More coming from the owner; add them here with descriptive
// filenames and honest alt text (visually verify content before placing).
export const photos: GalleryPhoto[] = [
  {
    src: '/images/portable-storage-unit-delivered-home-raceland-la.jpg',
    alt: 'White Stow-N-Go portable storage unit with red roll-up door delivered to a home under construction near Raceland, Louisiana',
    category: 'Units',
    title: 'Unit on site during a home build',
  },
  {
    src: '/images/stow-n-go-portable-storage-units-raceland-yard.jpg',
    alt: 'Close view of a Stow-N-Go portable storage unit roll-up door at the Raceland yard',
    category: 'Units',
    title: 'Roll-up door detail at the yard',
  },
  {
    src: '/images/delivery-truck-hauling-portable-storage-unit.jpg',
    alt: 'Stow-N-Go delivery truck hauling a portable storage unit on a trailer in South Louisiana',
    category: 'Delivery',
    title: 'A unit headed out for delivery',
  },
  {
    src: '/images/storage-unit-built-in-raceland-facility.jpg',
    alt: 'Portable storage unit under construction inside the Stow-N-Go manufacturing facility in Raceland',
    category: 'Facility',
    title: 'A unit being built in the shop',
  },
  {
    src: '/images/stow-n-go-facility-raceland-la.jpg',
    alt: 'The white Stow-N-Go manufacturing building with red awnings in Raceland, Louisiana',
    category: 'Facility',
    title: 'The Raceland facility',
  },
]

export const categories = ['All', 'Units', 'Delivery', 'Facility']
