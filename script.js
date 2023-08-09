function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light, colocar img light
    img.Setatribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light, manter normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
