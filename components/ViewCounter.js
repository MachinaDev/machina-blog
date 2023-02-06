import { useEffect, useState } from 'react'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import axios from 'axios'

export default function ViewCounter({ slug, className, blogPage = false }) {
  //   let { data } = useSWR(`/api/views/${slug}`, fetcher)

  const [views, setViews] = useState(0)

  const getTotal = async () => {
    const response = await axios.get(`/api/views/${slug}`)
    const total = response.data.total
    if (total > 0) {
      setViews(total)
    }
  }

  const addView = async () => {
    await axios.post(`/api/views/${slug}`)
  }

  useEffect(() => {
    // fetch(`/api/views/${slug}`, {
    //   method: 'GET',
    // })
    //   .then((response) => {
    //     console.log(`Log de slug dans ViewCounter:`, slug)
    //     console.log(`Log de response dans ViewCounter:`, response)
    //     let parsedResponse = JSON.parse(response?.json())
    //     console.log(`Log de parsedResponse dans ViewCounter:`, parsedResponse)
    //   })
    //   .then((response) => {
    //     console.log(`Log de response.json() dans :`, response?.json())

    //     if (response?.ok) return response.json()
    //   })
    //   .then((json) => {
    //     console.log(`Log de json dans ViewCounter:`, json)

    //     if (json?.total) {
    //       setViews(json.total)
    //     }
    //   })

    getTotal()

    // let registerView = () =>
    //   fetch(`/api/views/${slug}`, {
    //     method: 'POST',
    //   })

    if (blogPage) {
      addView()
    }
  }, [blogPage, slug])

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'}`}</span>
}
