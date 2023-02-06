import { checkToken, getNowPlaying } from '@/lib/spotify'

export default async function handler(req, res) {
  await checkToken()

  const response = await getNowPlaying()
  const song = response.body

  if (response.statusCode === 204 || response.statusCode > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}
