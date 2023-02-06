import axios from 'axios'

import { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function AnalyticsCard() {
  const [pageViews, setPageViews] = useState(0)

  const getViews = async () => {
    const response = await axios.get(`/api/views`)
    const totalViews = response.data.total
    setPageViews(totalViews)
  }

  useEffect(() => {
    getViews()
  }, [pageViews])

  const link = process.env.NEXT_PUBLIC_BASE_PAGE

  return <MetricCard header="All-Time Views" link={link} metric={pageViews} isCurrency={false} />
}
