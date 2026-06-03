export interface Article {
  id: number
  category: 'skincare' | 'dental'
  categoryLabel: string
  title: string
  date: string
  image: string
  readTime: string
  body?: string[]
  bodyAfterImage?: string[]
}

export const defaultBody = [
  'Healthy skin is more than an aesthetic concern. It is a reflection of overall skin function, protection, and long-term wellness. Modern skincare combines medical expertise, advanced technology, and personalized treatment plans to address both visible concerns and underlying skin conditions.',
  'At Atlantis Clinic, skincare treatments are designed around individual skin needs. A thorough consultation allows specialists to assess skin type, lifestyle factors, and specific concerns such as acne, pigmentation, sensitivity, dehydration, or early signs of aging. This approach ensures that each treatment targets the root cause rather than masking symptoms.',
  'Advanced procedures such as skin boosters, laser treatments, and professional-grade facials work to stimulate collagen production, improve hydration, and restore skin balance. These treatments are minimally invasive, require little to no downtime, and are tailored to deliver natural-looking, long-lasting results.',
  'Consistent professional skincare, combined with proper at-home care, can significantly improve skin texture, tone, and resilience. Beyond visible improvements, patients often report increased confidence and comfort in their daily lives.',
  'By integrating medical knowledge with modern aesthetic standards, Atlantis Clinic aims to support healthy, radiant skin at every stage of life.',
]

export const defaultBodyAfterImage = [
  'Aesthetics are at the core of our philosophy. We believe that a healthy smile and harmonious appearance are essential expressions of confidence and quality of life. By combining medical precision with an artistic vision, we deliver results that are natural, balanced, and enduring.',
  'Using state-of-the-art technologies, high-quality materials, and a fully personalized approach, we create an experience that goes beyond clinical care, one defined by comfort, discretion, and uncompromising quality.',
]

export const articles: Article[] = [
  {
    id: 1,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: 'Behind the Technology Powering Our Modern Dental Suites',
    date: '25.12.25',
    image: '/images/media/article-1.png',
    readTime: '2 minute read',
    body: defaultBody,
    bodyAfterImage: defaultBodyAfterImage,
  },
  {
    id: 2,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: 'Introducing the Latest Generation of Digital Smile Design',
    date: '25.12.25',
    image: '/images/media/article-2.png',
    readTime: '3 minute read',
  },
  {
    id: 3,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'Introducing our state of the art Clinic in Dubai',
    date: '25.12.25',
    image: '/images/media/article-3.png',
    readTime: '2 minute read',
  },
  {
    id: 4,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'The Future of Minimally Invasive Cosmetic Dentistry',
    date: '25.12.25',
    image: '/images/media/article-4.png',
    readTime: '4 minute read',
  },
  {
    id: 5,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: "Revolutionizing Dental Care: The Tech Behind Today's Practices",
    date: '25.12.25',
    image: '/images/media/article-5.png',
    readTime: '3 minute read',
  },
  {
    id: 6,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: 'Unveiling the Next Wave of Digital Smile Innovations',
    date: '25.12.25',
    image: '/images/media/article-6.png',
    readTime: '2 minute read',
  },
  {
    id: 7,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'Welcome to Our Cutting-Edge Dental Clinic in Abu Dhabi',
    date: '25.12.25',
    image: '/images/media/article-7.png',
    readTime: '3 minute read',
  },
  {
    id: 8,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'The Next Frontier in Gentle Cosmetic Dentistry',
    date: '25.12.25',
    image: '/images/media/article-8.png',
    readTime: '2 minute read',
  },
  {
    id: 9,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: 'Exploring the Innovations Driving Modern Dental Facilities',
    date: '25.12.25',
    image: '/images/media/article-9.png',
    readTime: '3 minute read',
  },
  {
    id: 10,
    category: 'skincare',
    categoryLabel: 'Skin Care',
    title: 'Discover the New Era of Digital Smile Solutions',
    date: '25.12.25',
    image: '/images/media/article-10.png',
    readTime: '2 minute read',
  },
  {
    id: 11,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'Step Inside Our Advanced Dental Clinic in Sharjah',
    date: '25.12.25',
    image: '/images/media/article-11.png',
    readTime: '4 minute read',
  },
  {
    id: 12,
    category: 'dental',
    categoryLabel: 'Dental Care',
    title: 'The Evolution of Non-Invasive Cosmetic Dentistry Techniques',
    date: '25.12.25',
    image: '/images/media/article-12.png',
    readTime: '3 minute read',
  },
]
