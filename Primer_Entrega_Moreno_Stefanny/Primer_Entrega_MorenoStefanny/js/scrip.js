document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("activo");
        });

        document.querySelectorAll(".menu a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                menu.classList.remove("activo");
            });
        });
    }

    const formulario = document.getElementById("formularioContacto");
    const respuesta = document.getElementById("respuestaFormulario");

    if (formulario && respuesta) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || mensaje === "") {
                respuesta.textContent = "Por favor, completa todos los campos.";
                respuesta.style.color = "red";
                return;
            }

            const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!correoValido.test(correo)) {
                respuesta.textContent = "Ingresa un correo válido.";
                respuesta.style.color = "red";
                return;
            }

            respuesta.textContent = "Mensaje enviado correctamente.";
            respuesta.style.color = "green";
            formulario.reset();
        });
    }

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});