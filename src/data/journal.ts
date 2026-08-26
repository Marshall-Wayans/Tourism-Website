import { images } from './images'
import type { Article } from '../types'

export const articles: Article[] = [
  {
    id: 'migration-update',
    title: 'Where the herds are right now: a Serengeti migration update',
    slug: 'serengeti-migration-update',
    category: 'Migration',
    author: 'Amani field team',
    date: '2026-08-12',
    readTime: '5 min read',
    image: images.migrationWide,
    imageAlt: 'Long columns of wildebeest moving across the Serengeti beneath storm clouds and shafts of golden light',
    excerpt:
      'Our guides report from the northern Serengeti, where the herds have massed along the Mara River and crossings are happening in bursts rather than on any schedule.',
    content: [
      {
        body: 'The migration is not an event with a timetable. It is roughly two million wildebeest, zebra and eland following rainfall and grass quality around an 800-kilometre loop, and the only reliable thing about it is that it keeps moving.',
      },
      {
        heading: 'The northern Serengeti',
        body: 'Through August and into October the front of the herd is generally in the north, between the Bologonja and the Mara River. Crossings build for hours and then happen in minutes, often at the same handful of traditional points. Patience matters more than position — our guides will usually sit at a crossing point for half a day rather than chase reports over the radio.',
      },
      {
        heading: 'What this means for planning',
        body: 'If crossings are your priority, build in three nights in the north rather than two. If the calving season interests you more, the southern short-grass plains around Ndutu between late January and March offer the highest concentration of newborns and predators anywhere on the circuit.',
      },
      {
        heading: 'A note on certainty',
        body: 'We will never promise a river crossing on a particular date. What we can do is put you in the right part of the ecosystem for the season, in a camp that moves, with a guide who has watched these herds for years.',
      },
    ],
    tags: ['Great Migration', 'Serengeti', 'Wildlife'],
  },
  {
    id: 'best-time',
    title: 'The best time to visit Tanzania, season by season',
    slug: 'best-time-to-visit-tanzania',
    category: 'Travel Tips',
    author: 'Amani field team',
    date: '2026-07-02',
    readTime: '7 min read',
    image: images.serengeti,
    imageAlt: 'Golden Serengeti plains with scattered acacia trees and grazing herds in soft morning light',
    excerpt:
      'There is no single best month. There is a best month for what you want — calving, crossings, clear summits, whale sharks or empty parks.',
    content: [
      {
        body: 'Tanzania has two rainy seasons and a long dry season, and each of them makes something else possible. Choosing well is less about avoiding rain and more about matching the month to the trip you actually want.',
      },
      {
        heading: 'June to October — the long dry season',
        body: 'The classic safari window. Vegetation thins, wildlife concentrates on permanent water, and Kilimanjaro is at its clearest. It is also the busiest and the coldest at altitude — crater rim mornings need a jacket.',
      },
      {
        heading: 'November to December — the short rains',
        body: 'Brief afternoon storms, green landscapes, superb birding as migratory species arrive, and noticeably fewer vehicles. Roads in the southern and western parks can become difficult.',
      },
      {
        heading: 'January to March — calving and clear mountains',
        body: 'Wildebeest calve on the southern Serengeti plains in enormous numbers, with predators close behind. This is also the warmest, clearest window on Kilimanjaro and a strong period for Zanzibar.',
      },
      {
        heading: 'April to May — the long rains',
        body: 'The quietest months. Some camps close, roads soften and the light is dramatic. If you do not mind rain, this is when the parks feel most like yours alone.',
      },
    ],
    tags: ['Planning', 'Seasons', 'Safari'],
  },
  {
    id: 'kili-routes',
    title: 'Comparing the Kilimanjaro routes: which one suits you',
    slug: 'comparing-kilimanjaro-routes',
    category: 'Trekking',
    author: 'Amani mountain team',
    date: '2026-06-18',
    readTime: '8 min read',
    image: images.machame,
    imageAlt: 'Trekkers on the Shira Plateau of Kilimanjaro with the glaciated summit rising ahead',
    excerpt:
      'Machame, Lemosho, Marangu, Rongai, Umbwe or the Northern Circuit — the honest differences between them, and why days on the mountain matter more than the route you pick.',
    content: [
      {
        body: 'Almost every question we are asked about Kilimanjaro is really a question about acclimatisation. The single biggest factor in reaching Uhuru Peak is not fitness or route choice — it is how many nights you spend gaining altitude gradually.',
      },
      {
        heading: 'Add the extra day',
        body: 'A seven-day Machame has a substantially better summit rate than a six-day Machame. An eight-day Lemosho is better again, and the nine-day Northern Circuit is the strongest of all. If your budget of time allows only one upgrade, make it a day rather than a route.',
      },
      {
        heading: 'Scenery and traffic',
        body: 'Lemosho and the Northern Circuit are the quietest and the most varied. Machame is busy but spectacular. Marangu is the gentlest gradient and the only route with huts. Rongai is the driest, which makes it the sensible choice during the rains. Umbwe is short, brutally steep and suited only to experienced high-altitude trekkers.',
      },
      {
        heading: 'How we run the mountain',
        body: 'Twice-daily health checks, pulse oximetry, supplementary oxygen carried by the lead guide, porter loads within KPAP limits and a clear descent protocol. Summit night is optional every single time.',
      },
    ],
    tags: ['Kilimanjaro', 'Machame', 'Lemosho', 'Trekking'],
  },
  {
    id: 'packing',
    title: 'What to actually pack for a Tanzanian safari',
    slug: 'tanzania-safari-packing-guide',
    category: 'Travel Tips',
    author: 'Amani field team',
    date: '2026-05-27',
    readTime: '6 min read',
    image: images.packing,
    imageAlt: 'Flat lay of safari travel gear on warm linen including a leather duffel, binoculars, hat and notebook',
    excerpt:
      'Soft bag, neutral layers, your own binoculars, and considerably less than you think. A working list from the people who load the vehicles.',
    content: [
      {
        body: 'Light aircraft between the parks usually cap baggage at 15kg in a soft bag, which sounds restrictive until you realise how little you wear on safari. Most travellers bring roughly twice what they use.',
      },
      {
        heading: 'Clothing',
        body: 'Neutral colours in cotton or linen, layered. Mornings on the crater rim are genuinely cold and midday on the plains is not. Avoid blue and black, which attract tsetse flies, and leave anything camouflage-patterned at home — it is illegal for civilians in Tanzania.',
      },
      {
        heading: 'The things people forget',
        body: 'Your own binoculars, more than any single other item. A soft buff for dust. A headtorch for camp. A spare pair of glasses. A power bank, because vehicle charging is shared.',
      },
      {
        heading: 'What we provide',
        body: 'Drinking water in the vehicle, reference books, a beanbag or bracket for camera support on request, and a laundry turnaround at most camps that makes three changes of clothing entirely sufficient.',
      },
    ],
    tags: ['Packing', 'Planning', 'Safari'],
  },
  {
    id: 'stone-town',
    title: 'A slow morning in Stone Town',
    slug: 'slow-morning-in-stone-town',
    category: 'Zanzibar',
    author: 'Amani field team',
    date: '2026-04-14',
    readTime: '5 min read',
    image: images.stoneTown,
    imageAlt: 'A narrow sunlit alley in Stone Town Zanzibar with carved wooden doors and coral stone walls',
    excerpt:
      'Carved doors, Darajani market before the heat, and why the best way to see the old town is to accept that you will get lost.',
    content: [
      {
        body: 'Stone Town is a maze by design — narrow, shaded, and built for people rather than vehicles. The coral-stone walls hold the cool until mid-morning, which is why anything worth doing here happens early.',
      },
      {
        heading: 'The doors',
        body: 'The carved doors are the town\'s signature. Brass studs, lotus and chain motifs, Omani and Gujarati influence layered over Swahili craft — each one a record of the household that commissioned it.',
      },
      {
        heading: 'Darajani',
        body: 'Get to the market before eight. Fish, cloves, cinnamon bark, cardamom and the low constant negotiation of a working market rather than a display for visitors.',
      },
      {
        heading: 'The harder history',
        body: 'The former slave market site and the Anglican cathedral built over it are part of any honest visit. Our guides are Zanzibari historians and they do not soften it.',
      },
    ],
    tags: ['Zanzibar', 'Stone Town', 'Culture'],
  },
  {
    id: 'hadzabe-ethics',
    title: 'How we arrange cultural visits, and why it matters',
    slug: 'how-we-arrange-cultural-visits',
    category: 'Culture',
    author: 'Amani field team',
    date: '2026-03-09',
    readTime: '6 min read',
    image: images.hadzabe,
    imageAlt: 'Hadzabe community members walking through acacia bushland near Lake Eyasi in the early morning',
    excerpt:
      'Community visits go wrong when they are arranged for travellers rather than with communities. Here is how we try to get it right.',
    content: [
      {
        body: 'A cultural visit can be one of the most memorable mornings of a trip, or it can be an uncomfortable transaction where people perform their own lives. The difference is almost entirely in how it was arranged.',
      },
      {
        heading: 'Agreed in advance, every time',
        body: 'We work with the same Maasai, Hadzabe and Datoga families year-round. Visits are agreed beforehand, at a time the household chooses, and cancelled without argument when it does not suit them.',
      },
      {
        heading: 'Paid directly',
        body: 'Community fees go to the households and community funds involved, not through a broker. We are happy to show travellers exactly where that money goes.',
      },
      {
        heading: 'Photography',
        body: 'Always asked first, every time, by name. If the answer is no, it is no. Our guides will tell you this before you arrive, so nobody is put in an awkward position in the moment.',
      },
    ],
    tags: ['Responsible travel', 'Maasai', 'Hadzabe', 'Datoga'],
  },
  {
    id: 'first-safari',
    title: 'Your first hour on a game drive',
    slug: 'your-first-hour-on-a-game-drive',
    category: 'Safari',
    author: 'Amani field team',
    date: '2026-02-11',
    readTime: '4 min read',
    image: images.tileSafari,
    imageAlt: 'A lioness walking past a safari vehicle on golden savannah in early morning light',
    excerpt:
      'What actually happens when the roof goes up — and why the best guides spend the first hour looking at the ground.',
    content: [
      {
        body: 'The first hour of a first game drive is usually spent looking for something large. Experienced guides spend it looking for something small — tracks in the dust, a fresh scrape, alarm calls from impala at the treeline.',
      },
      {
        heading: 'Reading the morning',
        body: 'Overnight tracks tell you which way a pride moved and how long ago. Vultures give away a kill hours before anyone reaches it. Baboons in the canopy calling steadily usually means a leopard is moving below them.',
      },
      {
        heading: 'Going slowly',
        body: 'The instinct is to cover ground. The better approach is to stop, cut the engine and wait. Almost every remarkable sighting we have had came after somebody decided to stay put.',
      },
    ],
    tags: ['Safari', 'Guides', 'Wildlife'],
  },
  {
    id: 'guide-of-month',
    title: 'Meet the guides: how we train and who we hire',
    slug: 'meet-the-guides',
    category: 'Guides',
    author: 'Amani field team',
    date: '2026-01-22',
    readTime: '5 min read',
    image: images.guide,
    imageAlt: 'A Tanzanian safari guide standing beside an open safari vehicle on the savannah at golden hour',
    excerpt:
      'Our guides are Tanzanian, career naturalists, and paid year-round. Guide profiles will be published here as each team member confirms their details.',
    content: [
      {
        body: 'A safari is only as good as the person in the driver\'s seat. Everything else — the camp, the vehicle, the route — is arrangeable. Judgement in the field is not.',
      },
      {
        heading: 'How we hire',
        body: 'We recruit from Tanzanian wildlife colleges and from the guiding community around Arusha, and we hire for curiosity as much as for qualification. Individual guide names, specialisms and years of experience will be published here once each guide has confirmed their own profile details.',
      },
      {
        heading: 'Year-round employment',
        body: 'Guides and mountain crew are employed through the low season, not only when the parks are busy. It is the single clearest signal of how a company treats the people it depends on.',
      },
    ],
    tags: ['Guides', 'Our team'],
  },
]

export const journalCategories = [
  'All',
  'Migration',
  'Wildlife',
  'Safari',
  'Trekking',
  'Zanzibar',
  'Culture',
  'Travel Tips',
  'Guides',
] as const

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
