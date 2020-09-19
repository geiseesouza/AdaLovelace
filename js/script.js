document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()
  validaFormulario()
})

const inputName = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTelefone = document.getElementById("telefone")

const getMessage = (name, email, telefone) => {

  return `Por favor, preencha os campos: ${!name ? "nome" : ""} ${!email ? "email" : ""} ${!telefone ? "telefone" : ""}`
}

function validaFormulario() {
  const isNameFilled = inputName.value.trim() != ""
  const isEmailFilled = inputEmail.value.trim() != ""
  const isTelefoneFilled = inputTelefone.value.trim() != ""

  if (isNameFilled && isEmailFilled && isTelefoneFilled) {
    alert("Prontinho! você receberá as novidades por email.")
    inputEmail.value = ""
    inputName.value = ""
    inputTelefone.value = ""

  } else {
    alert(getMessage(isNameFilled, isEmailFilled, isTelefoneFilled))
  }
}