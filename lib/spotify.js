import SpotifyWebApi from 'spotify-web-api-node'

let accessToken = ''

const credentials = {
  accessToken: accessToken,
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
}

const spotifyApi = new SpotifyWebApi(credentials)

async function refreshToken() {
  try {
    if (!accessToken) {
      const data = await spotifyApi.refreshAccessToken()
      console.log('Access Token a été rafraîchi.')
      const newToken = data.body['access_token']
      console.log(`Le nouveau token est :`, newToken)
      spotifyApi.setAccessToken(newToken)
      accessToken = newToken
      console.log('access Token dans le if', accessToken)
    } else {
      console.log('access Token dans le else', accessToken)
    }
  } catch (err) {
    console.log('Impossible de rafraîchir le token: ', err.body.error)
  }
}

export async function checkToken() {
  try {
    await spotifyApi.getMe()
  } catch (err) {
    console.log('Probleme avec checkToken: ', err.body.error)
    console.log('Rechargement de Access Token')
    if (err.body.error.status === 401) {
      await refreshToken()
    }
  }
}

export const getTopTracks = async () => {
  try {
    const data = await spotifyApi.getMyTopTracks()
    return data
  } catch (err) {
    console.log('Probleme avec getTopTracks: ', err.body.error)
  }
}

export const getNowPlaying = async () => {
  try {
    const data = await spotifyApi.getMyCurrentPlayingTrack()
    return data
  } catch (err) {
    console.log('Probleme avec getNowPlaying: ', err)
  }
}
