// function toggleEstilos() {
//   const linkEstilos = document.getElementById("estilos");
//   const botonEstilos = document.getElementById("boton-estilos");

//   if (linkEstilos.href.endsWith("style.css")) {
//     linkEstilos.href = "";
//     botonEstilos.textContent = "Aplicar Estilos";
//   } else {
//     linkEstilos.href = "style.css";
//     botonEstilos.textContent = "Quitar Estilos";
//   }
// }

// function toggleDarkMode() {
//   const link = document.getElementById("dark-mode");
//   const boton = document.getElementById("boton-dark-mode");

//   if (link.href.includes("darkStyle.css")) {
//     link.href = "";
//     boton.textContent = "Modo Oscuro";
//     boton.classList.remove("btn-light");
//     boton.classList.add("btn-dark");
//   } else {
//     link.href = "darkStyle.css";
//     boton.textContent = "Modo Claro";
//     boton.classList.remove("btn-dark");
//     boton.classList.add("btn-light");
//   }
// }

function toggleDarkMode() {
  const body = document.body;
  const card = document.querySelector(".card");
  const cardBody = document.querySelector(".card-body");
  const heading = document.querySelector(".heading");
  const boton = document.getElementById("boton-dark-mode");

  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");

  card.classList.toggle("bg-dark");
  card.classList.toggle("text-light");

  cardBody.classList.toggle("bg-secondary");
  cardBody.classList.toggle("text-light");

  heading.classList.toggle("text-light");

  if (body.classList.contains("bg-dark")) {
    boton.textContent = "Modo Claro";
    boton.classList.remove("btn-dark");
    boton.classList.add("btn-light");
  } else {
    boton.textContent = "Modo Oscuro";
    boton.classList.remove("btn-light");
    boton.classList.add("btn-dark");
  }
}

//validacion dni e email

document.addEventListener("DOMContentLoaded", function () {
  const dniInput = document.getElementById("DNI");
  const emailInput = document.getElementById("email");

  dniInput.addEventListener("input", function () {
    const dniValue = dniInput.value;
    const isValid = /^\d{0,8}$/.test(dniValue); // Permite hasta 8 dígitos

    if (!isValid) {
      dniInput.classList.add("is-invalid");
    } else {
      dniInput.classList.remove("is-invalid");
    }
  });

  dniInput.addEventListener("blur", function () {
    const dniValue = dniInput.value;
    if (dniValue.length !== 8) {
      dniInput.classList.add("is-invalid");
    } else {
      dniInput.classList.remove("is-invalid");
    }
  });

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue); // Valida el formato del email

    if (!isValid) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
    }
  });

  emailInput.addEventListener("blur", function () {
    const emailValue = emailInput.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue); // Valida el formato del email

    if (!isValid) {
      emailInput.classList.add("is-invalid");
    } else {
      emailInput.classList.remove("is-invalid");
    }
  });
});
