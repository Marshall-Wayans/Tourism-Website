export interface MigrationMonth {
  month: string
  short: string
  region: string
  position: { x: number; y: number }
  headline: string
  detail: string
  highlight: string
  bestFor: string
}

/**
 * Seasonal guidance only. The migration follows rainfall and grass, not a
 * calendar — these are typical patterns, not guarantees. Update as the field
 * team reports movement.
 */
export const migrationMonths: MigrationMonth[] = [
  {
    month: 'January',
    short: 'Jan',
    region: 'Southern Serengeti & Ndutu',
    position: { x: 42, y: 74 },
    headline: 'Herds gather on the short-grass plains',
    detail:
      'The herds settle across the Ndutu and southern Serengeti plains, feeding on mineral-rich short grass ahead of calving.',
    highlight: 'Predator activity builds as the herds concentrate.',
    bestFor: 'Big cats, open-plain photography',
  },
  {
    month: 'February',
    short: 'Feb',
    region: 'Ndutu calving grounds',
    position: { x: 44, y: 78 },
    headline: 'Peak calving season',
    detail:
      'Around half a million calves are typically born within a few weeks. Lion, cheetah and hyena are never far away.',
    highlight: 'The single most dramatic wildlife window of the year.',
    bestFor: 'Newborn calves, predator interaction',
  },
  {
    month: 'March',
    short: 'Mar',
    region: 'Southern plains, moving north-west',
    position: { x: 40, y: 70 },
    headline: 'Calves find their legs',
    detail:
      'As the short rains ease, the herds begin drifting north-west towards Moru and the Seronera woodlands.',
    highlight: 'Green plains, dramatic skies, fewer vehicles.',
    bestFor: 'Green-season photography',
  },
  {
    month: 'April',
    short: 'Apr',
    region: 'Central Serengeti & Moru Kopjes',
    position: { x: 38, y: 60 },
    headline: 'The long rains, the herds move on',
    detail:
      'Movement north-west through the central Serengeti. Roads soften and some camps close, but the park empties of visitors.',
    highlight: 'The quietest month in the ecosystem.',
    bestFor: 'Solitude, landscape',
  },
  {
    month: 'May',
    short: 'May',
    region: 'Western corridor',
    position: { x: 30, y: 52 },
    headline: 'Columns form for the western push',
    detail:
      'Long single-file columns stretch across the central and western Serengeti as the rut often begins.',
    highlight: 'Enormous marching columns, often kilometres long.',
    bestFor: 'Scale, aerial and balloon flights',
  },
  {
    month: 'June',
    short: 'Jun',
    region: 'Grumeti River',
    position: { x: 26, y: 44 },
    headline: 'Grumeti crossings',
    detail:
      'Herds reach the Grumeti River, where large crocodile wait at the traditional crossing points.',
    highlight: 'The first major river crossings of the year.',
    bestFor: 'River crossings, dry-season light',
  },
  {
    month: 'July',
    short: 'Jul',
    region: 'Northern Serengeti approach',
    position: { x: 34, y: 32 },
    headline: 'Pushing towards the north',
    detail:
      'The front of the migration moves north through the Ikorongo and Bologonja areas towards the Mara River.',
    highlight: 'Herds spread over a huge area — position matters.',
    bestFor: 'Classic dry-season safari',
  },
  {
    month: 'August',
    short: 'Aug',
    region: 'Mara River, northern Serengeti',
    position: { x: 44, y: 22 },
    headline: 'Mara River crossings begin in earnest',
    detail:
      'Crossings build for hours and then happen in minutes. Nothing about the timing is predictable.',
    highlight: 'The most photographed moment of the migration.',
    bestFor: 'River crossings',
  },
  {
    month: 'September',
    short: 'Sep',
    region: 'Northern Serengeti & Mara',
    position: { x: 50, y: 18 },
    headline: 'Herds move back and forth across the river',
    detail:
      'Groups cross north and south repeatedly, following grass on either bank. Multiple crossings in one stay are possible.',
    highlight: 'The strongest month for repeat crossing chances.',
    bestFor: 'River crossings, big cats',
  },
  {
    month: 'October',
    short: 'Oct',
    region: 'Northern Serengeti, starting south',
    position: { x: 52, y: 26 },
    headline: 'The turn south begins',
    detail:
      'As the short rains approach, the herds begin the long move back down the eastern side of the park.',
    highlight: 'Quieter than August and September, still excellent.',
    bestFor: 'Late crossings, fewer vehicles',
  },
  {
    month: 'November',
    short: 'Nov',
    region: 'Eastern Serengeti & Lobo',
    position: { x: 56, y: 44 },
    headline: 'Short rains draw the herds south',
    detail:
      'Movement down through Lobo and the eastern plains as fresh grass appears behind the first storms.',
    highlight: 'Dramatic skies and green flushes on the plains.',
    bestFor: 'Photography, birding',
  },
  {
    month: 'December',
    short: 'Dec',
    region: 'Southern plains & Ndutu',
    position: { x: 46, y: 66 },
    headline: 'Back on the short-grass plains',
    detail:
      'The herds spread across the southern Serengeti and Ndutu again, ready for the calving season to begin.',
    highlight: 'The loop closes where it began.',
    bestFor: 'Pre-calving build-up',
  },
]
