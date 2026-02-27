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