export const SITE_NAV = [
  {
    id: 1,
    label: 'Services',
    slug: '/services',
  },
  {
    id: 2,
    label: 'Gallery',
    slug: '/gallery',
  },
  {
    id: 3,
    label: 'Reviews',
    slug: '/reviews',
  },
  {
    id: 4,
    label: 'Careers',
    slug: '/careers',
  },
  {
    id: 5,
    label: 'Contact',
    slug: '/contact',
  },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    label: 'Facebook',
    slug: 'https://www.facebook.com/wavelandscapingdesign',
    ext: 'FB-250x250.webp',
  },
  {
    id: 2,
    label: 'Instagram',
    slug: 'https://www.instagram.com/wavelandscapingdesign',
    ext: 'Instagram-250x250.webp',
  },
  {
    id: 3,
    label: 'TikTok',
    slug: 'https://www.tiktok.com/@wavelandscapingdesign',
    ext: 'TikTok-245x268.webp',
  },
]

export const SERVICES = [
  {
    id: 1,
    label: 'Lawn Maintenance',
    description: 'Achieve a greener lawn with lawn care services from our team.',
    slug: '/services/#lawn-maintenance',
    img: {
      src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1639097554/wavelandscapinganddesign/various/lawn-maintenance.webp',
      width: 220,
      height: 192,
      alt: 'lawn maintenance',
    },
  },
  {
    id: 2,
    label: 'Landscape Design',
    description: 'Endless ideas for customizing your personal resort or your backyard.',
    slug: '/services/#landscape-design',
    img: {
      src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1639097551/wavelandscapinganddesign/various/landscape-design.webp',
      width: 220,
      height: 206,
      alt: 'landscape design',
    },
  },
  {
    id: 3,
    label: 'Irrigation Services',
    description: 'Offering sprinkler checks and system repairs.',
    slug: '/services/#lawn-maintenance',
    img: {
      src: 'https://res.cloudinary.com/tumulty-web-services/image/upload/v1639097547/wavelandscapinganddesign/various/irrigation.webp',
      width: 220,
      height: 191,
      alt: 'irrigation',
    },
  },
]

export const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.wavelandscapinganddesign.com'
    : 'http://localhost:4001'

export const FAILED_EMAIL_MESSAGE =
  'There was an issue with your submission, please email the details to wavelandscapingdesign@gmail.com'
export const successEmailMessage = (page: string) =>
  `Thank you for your ${page} submission. We will reach out you shortly!`

export const PHONE = '561-319-3145'
