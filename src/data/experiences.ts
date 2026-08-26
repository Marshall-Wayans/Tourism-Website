import { images } from './images'
import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'hot-air-balloon-safari',
    title: 'Hot Air Balloon Safari',
    slug: 'hot-air-balloon-safari',
    category: 'Adventure',
    duration: 'Approx. 2.5 hours',
    description:
      'Drift silently over the Serengeti at dawn, then toast the sunrise with a bush breakfast.',
    detail:
      'Lift off from Seronera or the western corridor as the light turns, low enough over the grass to hear hooves, high enough to see the herds strung out for kilometres. You land where the wind decides, and breakfast is laid out under an acacia.',
    image: images.balloon,
    imageAlt: 'A hot air balloon drifting low over the Serengeti plains at dawn with long shadows across golden grass',
    location: 'Serengeti National Park',
    rating: 4.9,
    instantEnquiry: true,
  },
  {
    id: 'private-night-game-drive',
    title: 'Private Night Game Drive',
    slug: 'private-night-game-drive',
    category: 'Wildlife',
    duration: 'Approx. 3 hours',
    description:
      'Spot leopard, genet and other nocturnal hunters on an after-dark expedition with a spotlight guide.',
    detail:
      'Permitted in select concessions and private reserves, the night drive is a different park entirely — bushbabies in the branches, aardvark tracks in the dust, and the red filter of the spotlight catching eyes at the edge of the grass.',
    image: images.nightDrive,
    imageAlt: 'A spotlight picking out a leopard moving through dry grass beside a safari vehicle at night',
    location: 'Tarangire & private concessions',
    rating: 4.8,
    instantEnquiry: true,
  },
  {
    id: 'sunset-dhow-cruise',
    title: 'Sunset Dhow Cruise, Zanzibar',
    slug: 'sunset-dhow-cruise',
    category: 'Relaxation',
    duration: 'Approx. 2 hours',
    description: 'Sail a traditional wooden dhow into a blazing Indian Ocean sunset.',
    detail:
      'A hand-built dhow, a lateen sail, and the Stone Town waterfront falling away behind you. Crew hand round fruit and spiced tea as the light goes copper over the channel.',
    image: images.dhow,
    imageAlt: 'A traditional wooden dhow with a triangular sail silhouetted against an orange Indian Ocean sunset',
    location: 'Stone Town, Zanzibar',
    rating: 4.8,
    instantEnquiry: true,
  },
  {
    id: 'walk-with-the-hadzabe',
    title: 'Walk with the Hadzabe',
    slug: 'walk-with-the-hadzabe',
    category: 'Culture',
    duration: 'Approx. 3 hours',
    description:
      "Join one of the world's last hunter-gatherer communities on a traditional bush walk near Lake Eyasi.",
    detail:
      'Arranged directly with the community and their own interpreters, an early-morning walk in the acacia bush around Lake Eyasi. Visits are agreed in advance, kept small, and the community decides what is shared.',
    image: images.hadzabe,
    imageAlt: 'Hadzabe community members walking through dry acacia bushland near Lake Eyasi in early morning light',
    location: 'Lake Eyasi',
    rating: 4.9,
    instantEnquiry: true,
  },
  {
    id: 'walking-safari',
    title: 'Guided Walking Safari',
    slug: 'walking-safari',
    category: 'Nature',
    duration: 'Approx. 3 hours',
    description:
      'Track on foot with an armed ranger in Arusha National Park, Tarangire, Mto wa Mbu or Lake Natron.',
    detail:
      'Walking changes the scale of the bush. Dung beetles, tracks in the sand, the smell of wild basil — detail a vehicle drives straight past, read for you by a guide who grew up here.',
    image: images.tileSafari,
    imageAlt: 'A guide leading walkers across open savannah grassland in the early morning light',
    location: 'Arusha NP, Tarangire, Lake Manyara, Lake Natron',
    rating: 4.8,
    instantEnquiry: false,
  },
  {
    id: 'bird-watching',
    title: 'Bird-Watching Itineraries',
    slug: 'bird-watching',
    category: 'Nature',
    duration: 'Half day to multi-day',
    description:
      'Dedicated birding routes across northern, southern, eastern and western Tanzania.',
    detail:
      'Over 1,100 species have been recorded in Tanzania. Routes are built around the season and your target list, from Rift Valley soda lakes to the Eastern Arc forests and the Kilombero floodplain.',
    image: images.manyara,
    imageAlt: 'Flamingos and water birds feeding in the shallows of a Rift Valley soda lake',
    location: 'Nationwide',
    rating: 4.7,
    instantEnquiry: false,
  },
  {
    id: 'maasai-cultural-visit',
    title: 'Maasai Homestead Visit',
    slug: 'maasai-cultural-visit',
    category: 'Culture',
    duration: 'Approx. 3 hours',
    description:
      'Spend a morning with a Maasai family in the Ngorongoro highlands, on their terms and their invitation.',
    detail:
      'A conversation rather than a performance: cattle, grazing patterns, beadwork, and how boma life is changing. Arranged with families we work with year-round, with fees paid directly to the community.',
    image: images.tileCulture,
    imageAlt: 'Maasai community members in red shukas walking across open savannah at golden hour',
    location: 'Ngorongoro highlands',
    rating: 4.7,
    instantEnquiry: false,
  },
  {
    id: 'olduvai-gorge',
    title: 'Olduvai Gorge & Museum',
    slug: 'olduvai-gorge',
    category: 'Culture',
    duration: 'Approx. 2 hours',
    description:
      'Stand above the excavation layers that rewrote the story of early humans.',
    detail:
      'A guided visit to the gorge and its museum, easily built into the drive between Ngorongoro and the Serengeti — layered volcanic ash, stone tools, and the Laetoli footprint story.',
    image: images.ngorongoro,
    imageAlt: 'The layered rock walls of Olduvai Gorge in the Rift Valley',
    location: 'Ngorongoro Conservation Area',
    rating: 4.6,
    instantEnquiry: false,
  },
  {
    id: 'materuni-waterfalls',
    title: 'Materuni Waterfalls & Coffee',
    slug: 'materuni-waterfalls',
    category: 'Nature',
    duration: 'Full day',
    description:
      'Walk to a 80-metre waterfall on the slopes of Kilimanjaro, then roast coffee with a Chagga family.',
    detail:
      'A green day out from Moshi — banana groves, a cold plunge pool below the falls, and the whole coffee process by hand, from picking to pounding to the cup.',
    image: images.tileTrek,
    imageAlt: 'A tall waterfall falling into a green pool on the forested slopes of Kilimanjaro',
    location: 'Moshi, Kilimanjaro Region',
    rating: 4.7,
    instantEnquiry: true,
  },
  {
    id: 'coffee-plantation-tour',
    title: 'Kikuletwa Hot Springs & Lake Chala',
    slug: 'kikuletwa-hot-springs',
    category: 'Relaxation',
    duration: 'Full day',
    description:
      'Swim in the impossibly clear Kikuletwa springs and look down into the crater lake at Chala.',
    detail:
      'Fig roots over turquoise spring water at Kikuletwa, then the drive east to Lake Chala on the Kenyan border, a crater lake that changes colour through the afternoon.',
    image: images.dhow,
    imageAlt: 'Clear turquoise spring water surrounded by fig tree roots at Kikuletwa hot springs',
    location: 'Kilimanjaro Region',
    rating: 4.6,
    instantEnquiry: true,
  },
  {
    id: 'spice-farm-tour',
    title: 'Zanzibar Spice Farm Walk',
    slug: 'spice-farm-tour',
    category: 'Culture',
    duration: 'Approx. 3 hours',
    description: 'Clove, nutmeg, cardamom and vanilla, tasted straight off the plant.',
    detail:
      'A walk through a working farm in the island interior with a grower, followed by a Swahili lunch cooked with everything you have just smelled.',
    image: images.stoneTown,
    imageAlt: 'Spices and fresh produce laid out at a working spice farm in the Zanzibar interior',
    location: 'Central Zanzibar',
    rating: 4.6,
    instantEnquiry: true,
  },
  {
    id: 'stone-town-walk',
    title: 'Stone Town Heritage Walk',
    slug: 'stone-town-walk',
    category: 'Culture',
    duration: 'Approx. 3 hours',
    description: 'Carved doors, coral-stone alleys and the layered history of the Swahili coast.',
    detail:
      'A slow walk with a Zanzibari historian through the old town — the Old Fort, the House of Wonders exterior, Darajani market and the former slave market memorial.',
    image: images.stoneTown,
    imageAlt: 'A narrow sunlit alley in Stone Town Zanzibar with carved wooden doors and coral stone walls',
    location: 'Stone Town, Zanzibar',
    rating: 4.7,
    instantEnquiry: true,
  },
]

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug)
