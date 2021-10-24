const linksSocialMedia = {
  github: 'daniel-roc',
  youtube: 'maykbrito',
  facebook: 'daniel.rochalves',
  instagram: 'danielroocha',
  twitter: 'DanAlRoc'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = `https://github.com/${data.login}`
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
