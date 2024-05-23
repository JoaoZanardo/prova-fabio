const fullName = document.getElementById('fullName').value
const name = document.getElementById('name').value
const password = document.getElementById('password').value

document.getElementById('form').addEventListener('submit', async event => {
  event.preventDefault()

  const data = {
    name: fullName,
    usuario: name,
    senha: password
  }

  const response = await fetch(`https://664e94e9fafad45dfae07b42.mockapi.io/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  console.log(await response.json())

  document.getElementById('btt').addEventListener('click', function () {
    window.location.href = '../signin/';
  })
})

