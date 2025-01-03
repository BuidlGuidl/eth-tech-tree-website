import { PageProps } from '../../../.next/types/app/page'
import { Leaderboard } from '../components/leaderboard'

export default async function LeaderboardPage({
  searchParams,
}: PageProps) {
  // Handle both single batch parameter and multiple batch parameters
  const batchParam = (await searchParams).batch
  const batches = Array.isArray(batchParam)
    ? batchParam.map(Number)
    : typeof batchParam === 'string' && batchParam.includes(',')
    ? batchParam.split(',').map(Number)
    : batchParam
    ? [Number(batchParam)]
    : undefined

  // Handle graduates filter
  const graduatesOnly = (await searchParams).graduates === 'true'

  return (
    <main>
      <Leaderboard batches={batches} graduatesOnly={graduatesOnly} />
    </main>
  )
} 