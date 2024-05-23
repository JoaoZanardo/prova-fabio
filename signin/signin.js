document.getElementById('form').addEventListener('submit', async event => {
  event.preventDefault()

  const username = document.getElementById('name').value
  const password = document.getElementById('password').value

  const response = await fetch(`https://664e7557fafad45dfae01fb8.mockapi.io?usuario=${username}`)
  const users = await response.json()

  console.log({ users })

  const response2 = await fetch(`https://664e7557fafad45dfae01fb8.mockapi.io`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'joao',
      password: '123'
    })
  })

  console.log(await response2.json(), 'TOP DMS')

  if (users.length > 0) {
    const user = users[0]
    if (user.password === password) {
      localStorage.setItem('username', username)
      window.location.href = 'parabens.html'
    } else {
      document.getElementById('loginMessage').innerText = 'Usuário ou senha inválidos'
    }
  } else {
    document.getElementById('loginMessage').innerText = 'Usuário não encontrado'
  }
})