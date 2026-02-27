const greetingName = document.getElementById("greetingName")

if (greetingName) {

  
  greetingName.addEventListener("input", function () {
    if (
      greetingName.innerHTML === "<br>" ||
      greetingName.textContent.trim() === ""
    ) {
      greetingName.innerHTML = ""
    }
  })

}

const section = document.querySelector('.contact-form')
const form = section ? section.querySelector('form') : null

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nameInput = form.querySelector('input[type="text"]').value.trim()
    const email = form.querySelector('input[type="email"]').value
    const message = form.querySelector('textarea').value
    const finalName = nameInput || getCurrentName()

    showPopup(finalName, email, message)
    form.reset()
  })
}

function showPopup(name, email, message) {
  const popup = document.getElementById('popup')
  const popupContent = document.getElementById('popup-content')

  popupContent.innerHTML = `
    <strong>Name:</strong> ${name} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Message:</strong> ${message}
  `

  popup.classList.remove('hidden')

  setTimeout(() => {
    popup.classList.add('hidden')
  }, 3000)
}