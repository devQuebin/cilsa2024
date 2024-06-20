function toggleEstilos() {
  const linkEstilos = document.getElementById("estilos");
  const botonEstilos = document.getElementById("boton-estilos");

  if (linkEstilos.href.endsWith("style.css")) {
    linkEstilos.href = "";
    botonEstilos.textContent = "Aplicar Estilos";
  } else {
    linkEstilos.href = "style.css";
    botonEstilos.textContent = "Quitar Estilos";
  }
}

function toggleDarkMode() {
  const link = document.getElementById("dark-mode");
  const boton = document.getElementById("boton-dark-mode");

  if (link.href.includes("darkStyle.css")) {
    link.href = "";
    boton.textContent = "Modo Oscuro";
    boton.classList.remove("activado");
  } else {
    link.href = "darkStyle.css";
    boton.textContent = "Modo Claro";
    boton.classList.add("activado");
  }
}
