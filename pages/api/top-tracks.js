/* eslint-disable import/no-anonymous-default-export */
import { checkToken, getTopTracks } from '@/lib/spotify'

export default async (_, res) => {
  await checkToken()
  const response = await getTopTracks()

  const { items } = response.body

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[1].url,
    title: track.name,
  }))

  return res.status(200).json({ tracks })
}
