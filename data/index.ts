// ─────────────────────────────────────────────────────────────────────────────
// UPDATE THIS FILE to keep site content current.
// All pages pull their data from here.
// ─────────────────────────────────────────────────────────────────────────────

export const stats = {
  businesses: 12,        // total businesses supported
  grants: 5,             // grants written / submitted
  socialPosts: 0,        // live social media posts published for clients
  students: 45,          // current team size
  neighborhoods: 8,      // NYC neighborhoods active
}

export const bids = [
  { name: 'Park Slope 5th Ave BID', borough: 'Brooklyn', status: 'Active Partner' },
  { name: 'Sunnyside BID', borough: 'Queens', status: 'Active Partner' },
  { name: 'Cypress Hills LDC', borough: 'Brooklyn', status: 'Active Partner' },
  { name: 'LIC Partnership', borough: 'Queens', status: 'In Progress' },
  { name: 'North Flatbush BID', borough: 'Brooklyn', status: 'In Progress' },
  { name: 'Greater Jamaica Development Corp', borough: 'Queens', status: 'In Progress' },
  { name: 'Atlantic Ave BID', borough: 'Brooklyn', status: 'In Progress' },
  { name: 'Bayside Village BID', borough: 'Queens', status: 'In Progress' },
]

export type ProjectStatus = 'Active' | 'Completed' | 'Upcoming'
export type Track = 'Tech' | 'Marketing' | 'Finance'

export interface Project {
  business: string
  type: string
  neighborhood: string
  borough: string
  track: Track[]
  status: ProjectStatus
  description: string
  deliverables: string[]
  websiteUrl?: string
  instagramUrl?: string
}

export const projects: Project[] = [
  {
    business: 'Souk Al Shater',
    type: 'Lebanese Restaurant',
    neighborhood: 'Sunnyside',
    borough: 'Queens',
    track: ['Tech'],
    status: 'Active',
    description: 'Full website build from scratch for a Lebanese restaurant with no prior web presence.',
    deliverables: ['New website', 'Google Maps integration', 'Online menu'],
  },
  {
    business: 'Higher Learning',
    type: 'Tutoring Center',
    neighborhood: 'Chinatown',
    borough: 'Manhattan',
    track: ['Tech'],
    status: 'Active',
    description: 'Website build with multilingual content support (English/Cantonese/Mandarin) and SEO setup.',
    deliverables: ['New website', 'SEO optimization', 'Multilingual content'],
  },
  {
    business: 'Anatolico',
    type: 'Turkish Home Goods',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Marketing'],
    status: 'Active',
    description: 'Social media strategy and Founder Stories content series for a new physical storefront transitioning from online/pop-up.',
    deliverables: ['Instagram strategy', 'Founder interview series', 'Content calendar'],
    instagramUrl: 'https://instagram.com/anatolico',
  },
  {
    business: 'Juliette Floral Design',
    type: 'Flower & Gift Shop',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Tech'],
    status: 'Upcoming',
    description: 'Website redesign with online ordering integration and event calendar.',
    deliverables: ['Website redesign', 'Online ordering', 'Event calendar'],
  },
  {
    business: 'The Painted Pot',
    type: 'Art Studio',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Tech', 'Marketing', 'Finance'],
    status: 'Upcoming',
    description: 'SEO improvement, Google visibility, social media strategy, and Brooklyn Arts Council grant application support.',
    deliverables: ['SEO audit', 'Google Maps optimization', 'Grant application'],
  },
  {
    business: 'Gift Man',
    type: 'Souvenir & Gift Shop',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Tech'],
    status: 'Upcoming',
    description: 'Website overhaul (Google Sites → modern platform), online selling integration, and SEO.',
    deliverables: ['New website', 'E-commerce setup', 'SEO'],
  },
  {
    business: 'Bayaal',
    type: 'African Home Goods',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Tech', 'Marketing'],
    status: 'Upcoming',
    description: 'Website clarity improvements and Founder Stories social media content.',
    deliverables: ['Website update', 'Founder interview', 'Social media content'],
  },
  {
    business: 'Bricolage',
    type: 'Vietnamese Restaurant',
    neighborhood: 'Park Slope',
    borough: 'Brooklyn',
    track: ['Marketing'],
    status: 'Upcoming',
    description: 'Digital storytelling with a focus on the founders\' immigrant story and Vietnamese cultural heritage.',
    deliverables: ['Founder Stories series', 'Social media content'],
    websiteUrl: 'https://bricolage.nyc',
  },
]

export const tracks = [
  {
    name: 'Finance & Operations',
    icon: '📊',
    color: 'volt',
    skills: ['Grant research & writing', 'Revenue & sales analysis', 'POS optimization', 'Digital payment setup', 'Financial document review'],
    outcome: 'Leave with submitted grant applications, financial analysis reports, and hands-on consulting experience.',
  },
  {
    name: 'Digital & Tech',
    icon: '💻',
    color: 'volt',
    skills: ['Full-stack web development', 'React.js & TypeScript', 'SEO & Google Maps', 'Cloud infrastructure', 'Web accessibility'],
    outcome: 'Leave with deployed websites in your GitHub portfolio and real client work you can demo.',
  },
  {
    name: 'Marketing & Strategy',
    icon: '📣',
    color: 'volt',
    skills: ['Social media management', 'Founder storytelling', 'Content creation & strategy', 'Campaign planning', 'Brand development'],
    outcome: 'Leave with a portfolio of live social content, brand work, and documented audience growth.',
  },
]

export const ticker = [
  'Park Slope', 'Sunnyside', 'Chinatown', 'Long Island City',
  'Cypress Hills', 'Flatbush', 'Flushing', 'Mott Haven',
  'Park Slope', 'Sunnyside', 'Chinatown', 'Long Island City',
  'Cypress Hills', 'Flatbush', 'Flushing', 'Mott Haven',
]
