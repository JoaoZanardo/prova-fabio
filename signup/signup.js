const form = document.getElementById('form')

const nameInput = document.getElementById('name')
const passwordInput = document.getElementById('password')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const user = await fetch(`https://664e7557fafad45dfae01fb8.mockapi.io/user/${nameInput.value}`)
  console.log({ user })
})