const repoOwner = "imt00dizzy"
const repoName = "dizzys-diary"
const commitsContainer = document.getElementById("github-updates")

async function fetchCommits() {
  if (!repoOwner || !repoName) return

  const res = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`)
  const data = await res.json()

  commitsContainer.innerHTML = ""

  data.slice(0, 5).forEach(commit => {
    const card = document.createElement("div")
    card.className = "commit-card"

    const title = document.createElement("div")
    title.className = "commit-title"
    title.textContent = commit.commit.message.split("\n")[0]

    const meta = document.createElement("div")
    meta.className = "commit-meta"
    meta.textContent = `github · ${new Date(commit.commit.author.date).toLocaleDateString()}`

    card.appendChild(title)
    card.appendChild(meta)
    commitsContainer.appendChild(card)
  })
}

fetchCommits()
