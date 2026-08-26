export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to: string
  children?: NavChild[]
}

export const headerNavigation: NavItem[] = [
  {
    label: 'Destinations',
    to: '/destinations',
    children: [
      { label: 'Serengeti National Park', to: '/destinations/serengeti-national-park' },
      { label: 'Ngorongoro Crater', to: '/destinations/ngorongoro-conservation-area' },
      { label: 'Tarangire National Park', to: '/destinations/tarangire-national-park' },
      { label: 'Lake Manyara National Park', to: '/destinations/lake-manyara-national-park' },
      { label: 'Arusha National Park', to: '/destinations/arusha-national-park' },
      { label: 'Mkomazi National Park', to: '/destinations/mkomazi-national-park' },
      { label: 'Mikumi National Park', to: '/destinations/mikumi-national-park' },
      { label: 'Ruaha National Park', to: '/destinations/ruaha-national-park' },
      { label: 'Rubondo Island', to: '/destinations/rubondo-island-national-park' },
      { label: 'Saa Nane Island', to: '/destinations/saa-nane-island' },
      { label: 'Zanzibar Archipelago', to: '/destinations/zanzibar' },
      { label: 'All destinations', to: '/destinations' },
    ],
  },
  {
    label: 'Safaris',
    to: '/safaris',
    children: [
      { label: 'Wildlife safaris', to: '/safaris?type=Safari' },
      { label: 'Walking safaris', to: '/experiences#walking-safari' },
      { label: 'Night game drives', to: '/experiences#private-night-game-drive' },
      { label: 'Hot-air ballooning', to: '/experiences#hot-air-balloon-safari' },
      { label: 'Bird watching', to: '/experiences#bird-watching' },
      { label: 'Migration tracker', to: '/migration-tracker' },
    ],
  },
  {
    label: 'Trekking',
    to: '/trekking',
    children: [
      { label: 'Kilimanjaro routes', to: '/kilimanjaro-routes' },
      { label: 'Machame Route', to: '/trekking/machame-route' },
      { label: 'Lemosho Route', to: '/trekking/lemosho-route' },
      { label: 'Mount Meru', to: '/trekking/mount-meru' },
      { label: 'Ol Doinyo Lengai', to: '/trekking/ol-doinyo-lengai' },
      { label: 'Mount Hanang', to: '/trekking/mount-hanang' },
    ],
  },
  {
    label: 'Experiences',
    to: '/experiences',
    children: [
      { label: 'Maasai cultural visits', to: '/culture#maasai' },
      { label: 'Hadzabe experiences', to: '/culture#hadzabe' },
      { label: 'Datoga experiences', to: '/culture#datoga' },
      { label: 'Olduvai Gorge', to: '/culture#olduvai' },
      { label: 'Day trips', to: '/experiences' },
      { label: 'Honeymoons', to: '/safaris?type=Combination' },
      { label: 'Family journeys', to: '/safaris?family=true' },
    ],
  },
  {
    label: 'Beach',
    to: '/beach',
    children: [
      { label: 'Zanzibar', to: '/destinations/zanzibar' },
      { label: 'Pemba Island', to: '/destinations/pemba-island' },
      { label: 'Mafia Island', to: '/destinations/mafia-island' },
      { label: 'Bagamoyo', to: '/destinations/bagamoyo' },
      { label: 'Pangani', to: '/destinations/pangani' },
    ],
  },
  {
    label: 'Journal',
    to: '/journal',
    children: [
      { label: 'Migration updates', to: '/journal?category=Migration' },
      { label: 'Destination guides', to: '/journal?category=Safari' },
      { label: 'Trekking notes', to: '/journal?category=Trekking' },
      { label: 'Packing & travel tips', to: '/journal?category=Travel%20Tips' },
      { label: 'Traveller gallery', to: '/gallery' },
    ],
  },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our story', to: '/about' },
      { label: 'Meet the guides', to: '/guides' },
      { label: 'Tanzania FAQ', to: '/faq' },
      { label: 'Kilimanjaro FAQ', to: '/faq#kilimanjaro' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Responsible travel', to: '/responsible-travel' },
    ],
  },
]
