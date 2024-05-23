document.getElementById('form').addEventListener('submit', async event => {
  event.preventDefault()

  const username = document.getElementById('name').value
  const password = document.getElementById('password').value

  const response = await fetch(`https://664e94e9fafad45dfae07b42.mockapi.io/users`)
  const users = await response.json()

  const user = users.find(user => user.username === username)

  if (user) {
    if (user.password === password) {
      console.log('OK')
      localStorage.setItem('username', username)
      window.location.href = '../index.html'
    } else {
      console.log('NÃO OK')
      document.getElementById('error').innerText = '(Usuário ou senha inválidos)'
    }
  } else {
    document.getElementById('error').innerText = '(Usuário não encontrado)'
  }
})