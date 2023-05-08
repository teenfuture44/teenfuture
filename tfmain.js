// Seleciona o elemento do footer
const footer = document.querySelector('footer')

// Verifica a posição do scroll da página quando a página é rolada
window.addEventListener('scroll', () => {
  // Altura total da página
  const pageHeight = document.documentElement.scrollHeight
  // Altura da janela do navegador
  const windowHeight = window.innerHeight
  // Posição atual do scroll da página
  const scrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0)

  // Se o usuário chegou ao final da página, adiciona a classe ".visible" ao elemento do footer
  if (pageHeight - windowHeight - scrollPosition <= 0) {
    footer.classList.add('visible')
  } else {
    footer.classList.remove('visible')
  }
})
