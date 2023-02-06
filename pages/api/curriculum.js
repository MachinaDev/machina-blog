export default function handler(req, res) {
  let parsed = JSON.parse(req.body.response)

  if (parsed === 333) {
    res.status(200).json({ link: "Je t'aime Vanessa" })
  } else {
    res.status(200).json({ link: 'John Doe' })
  }
}
