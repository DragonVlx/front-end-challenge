const hambuguer = document.querySelector(".hamburguer")
const navlinks = document.querySelector(".nav-links")

hambuguer.addEventListener("click", () => {
  hambuguer.classList.toggle("active")
  navlinks.classList.toggle("show")
})