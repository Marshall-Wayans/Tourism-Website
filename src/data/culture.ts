import { images } from './images'

export interface CultureEntry {
  id: string
  name: string
  region: string
  summary: string
  topics: { title: string; body: string }[]
  image: string
  imageAlt: string
  etiquette: string
}

export const cultureEntries: CultureEntry[] = [
  {
    id: 'maasai',
    name: 'The Maasai',
    region: 'Ngorongoro highlands, Longido, Simanjiro',
    summary:
      'Semi-nomadic pastoralists whose grazing lands overlap the Ngorongoro Conservation Area, where people and wildlife share the same landscape.',
    topics: [
      {
        title: 'Cattle and grazing',
        body: 'Cattle are wealth, food security and social standing at once. Grazing patterns shift with the rains, and the calendar of a homestead follows the herd rather than the clock.',
      },
      {
        title: 'Homesteads',
        body: 'A boma is built by the women of the household from timber, mud and dung, arranged in a ring with the livestock enclosure at the centre.',
      },
      {
        title: 'Beadwork',
        body: 'Colour and pattern carry meaning — age set, marital status, celebration. Beadwork is made by women and is a significant source of household income.',
      },
      {
        title: 'A living culture',
        body: 'Maasai life today includes schools, mobile phones, conservation employment and formal grazing agreements. Presenting it as unchanged would be inaccurate.',
      },
    ],
    image: images.tileCulture,
    imageAlt: 'Maasai community members in red shukas walking across open savannah at golden hour',
    etiquette: 'Visits are arranged in advance with the household. Always ask before photographing anyone.',
  },
  {
    id: 'hadzabe',
    name: 'The Hadzabe',
    region: 'Lake Eyasi, Rift Valley',
    summary:
      "One of the last hunter-gatherer communities in East Africa, living in the acacia bush around Lake Eyasi and speaking a click language unrelated to any other.",
    topics: [
      {
        title: 'Hunting and gathering',
        body: 'Men hunt with handmade bows; women gather tubers, berries and baobab fruit. Camps move with the seasons and food availability.',
      },
      {
        title: 'Language',
        body: 'Hadzane is a language isolate with distinctive click consonants, spoken by a community of roughly one to two thousand people.',
      },
      {
        title: 'Land pressure',
        body: 'Hadzabe land has been steadily reduced by agriculture and grazing. Land rights, not tourism, are the central issue for the community.',
      },
    ],
    image: images.hadzabe,
    imageAlt: 'Hadzabe community members walking through dry acacia bushland near Lake Eyasi in early morning light',
    etiquette: 'Walks happen at the community’s invitation and on their schedule. Fees are paid directly to the group.',
  },
  {
    id: 'datoga',
    name: 'The Datoga / Barbaig',
    region: 'Lake Eyasi, Manyara and the central Rift',
    summary:
      'Pastoralist communities known for metalwork and cattle herding, and long-standing neighbours of the Hadzabe around Lake Eyasi.',
    topics: [
      {
        title: 'Blacksmithing',
        body: 'Datoga smiths work brass and scrap metal into jewellery, arrowheads and tools using hand-pumped bellows and charcoal forges.',
      },
      {
        title: 'Pastoral life',
        body: 'Cattle, goats and donkeys support the household economy, with settlements arranged around grazing access and water.',
      },
      {
        title: 'Rift Valley heritage',
        body: 'Datoga are one of the oldest inhabitants of the northern Rift, with distinctive dress, facial markings and oral history.',
      },
    ],
    image: images.tileCulture,
    imageAlt: 'A Datoga blacksmith working metal at a charcoal forge in the Rift Valley',
    etiquette: 'Buy directly from the smiths if you want to take something home; ask before photographing work in progress.',
  },
  {
    id: 'olduvai',
    name: 'Olduvai Gorge',
    region: 'Ngorongoro Conservation Area',
    summary:
      'A 48-kilometre ravine where excavation has produced some of the most significant early-human finds anywhere in the world.',
    topics: [
      {
        title: 'The Cradle of Mankind',
        body: 'Excavations by Mary and Louis Leakey from the 1930s onwards uncovered hominin remains and Oldowan stone tools spanning nearly two million years.',
      },
      {
        title: 'Reading the layers',
        body: 'Volcanic ash beds allow the sediment layers to be dated precisely, making the gorge a reference sequence for early human evolution.',
      },
      {
        title: 'Laetoli',
        body: 'Nearby, a trail of 3.6-million-year-old hominin footprints was preserved in volcanic ash — direct evidence of upright walking.',
      },
    ],
    image: images.ngorongoro,
    imageAlt: 'The layered rock walls of Olduvai Gorge cutting through the dry Rift Valley landscape',
    etiquette: 'Visit with a site guide; removing anything from the gorge is prohibited.',
  },
]

export const faqs = {
  tanzania: [
    {
      q: 'Do I need a visa to visit Tanzania?',
      a: 'Most nationalities require a visa, available in advance through the Tanzanian immigration e-visa portal or on arrival at major entry points. Check the current requirements for your passport before travelling — we will confirm the details for your nationality when you enquire.',
    },
    {
      q: 'What vaccinations do I need?',
      a: 'A yellow fever certificate is required if you are arriving from, or transiting through, a country with risk of yellow fever transmission. Malaria prophylaxis is generally recommended. Speak to a travel clinic at least six weeks before departure.',
    },
    {
      q: 'When is the best time to go on safari?',
      a: 'June to October is the classic dry season with concentrated wildlife. January to March offers the calving season on the southern Serengeti plains. November and April to May are green, quiet and dramatic.',
    },
    {
      q: 'How much luggage can I bring?',
      a: 'Light aircraft between the parks typically limit baggage to around 15kg per person in a soft bag. Most travellers find three changes of neutral clothing entirely sufficient with camp laundry.',
    },
    {
      q: 'Is Tanzania suitable for families?',
      a: 'Yes. Many camps welcome children, and the Ngorongoro and Tarangire circuit works well for shorter attention spans thanks to short driving distances. We will match the pace and the properties to your children’s ages.',
    },
    {
      q: 'What currency should I bring?',
      a: 'The Tanzanian shilling is the local currency, and US dollars are widely accepted for park fees and tips. Bring notes issued after 2009. Card acceptance is limited outside cities and larger lodges.',
    },
    {
      q: 'Is it safe to travel in Tanzania?',
      a: 'Tanzania is generally a settled destination for travellers. Normal precautions apply in cities. Your guide is with you throughout, and we maintain contact with every trip in the field.',
    },
  ],
  kilimanjaro: [
    {
      q: 'How fit do I need to be?',
      a: 'Kilimanjaro requires no technical climbing, but it does require several consecutive long walking days and a very long summit night. Three to four months of hill walking with a loaded pack is the best preparation.',
    },
    {
      q: 'Which route should I choose?',
      a: 'Lemosho and the Northern Circuit offer the strongest acclimatisation and the quietest trails. Machame is the most popular scenic route. Marangu is the only hut-based route. Rongai is the driest. Umbwe is for experienced high-altitude trekkers only.',
    },
    {
      q: 'How many days do I need?',
      a: 'More days materially improve your chance of reaching Uhuru Peak. Seven days is our minimum recommendation on Machame; eight on Lemosho; nine on the Northern Circuit.',
    },
    {
      q: 'What happens if I get altitude sickness?',
      a: 'Guides carry out twice-daily health checks including pulse oximetry and Lake Louise scoring, carry supplementary oxygen and a first-response kit, and will descend with you if symptoms progress. Descent is never treated as a failure.',
    },
    {
      q: 'How are porters treated?',
      a: 'We work within KPAP-aligned load limits and wage standards, provide crew with proper equipment and meals, and employ mountain crew across the low season. Ask us for specifics — we are happy to explain exactly how our crews are paid.',
    },
    {
      q: 'Can I climb Kilimanjaro and go on safari?',
      a: 'Yes, and it is the most common combination. We generally recommend the mountain first and the safari or Zanzibar afterwards, so the trip finishes with rest rather than an alarm clock.',
    },
  ],
}
