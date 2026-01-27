const username = "imt00dizzy"
const apiKey = "e2e7ca68b80856cf1e57b3d891717f71"

async function fetchTrack() {
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`)
  const data = await res.json()
  const track = data.recenttracks.track[0]
  
  trackEl.textContent = track.name
  artistEl.textContent = track.artist["#text"]
  art.src = track.image[2]["#text"] || ""
  statusEl.textContent =
    track["@attr"] && track["@attr"].nowplaying
      ? "dizzy is now listening to"
      : "dizzy last listened to"
  
  const trackUrl = track.url
  cardEl.onclick = () => window.open(trackUrl, "_blank")
  cardEl.style.cursor = "pointer"
}

const trackEl = document.getElementById("track")
const artistEl = document.getElementById("artist")
const statusEl = document.getElementById("status")
const art = document.getElementById("art")
const cardEl = document.querySelector(".card")

fetchTrack()
setInterval(fetchTrack, 15000)