document.getElementById('form').addEventListener('submit', async event => {
  event.preventDefault()
  
  const fullName = document.getElementById('fullName').value
  const name = document.getElementById('name').value
  const password = document.getElementById('password').value

  const data = {
    name: fullName,
    username: name,
    password
  }

  const response = await fetch(`https://664e94e9fafad45dfae07b42.mockapi.io/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  console.log({ response })

  console.log(await response.json())
  
  window.location.href = '../signin/signin.html';
})

