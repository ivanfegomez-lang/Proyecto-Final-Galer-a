console.log("✅ Script cargado correctamente");


const botonesFiltro = document.querySelectorAll(".filter-btn");


const tarjetas = document.querySelectorAll("#galeria .col-md-4");


botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.getAttribute("data-category").toLowerCase();
        console.log("Filtro seleccionado:", categoria);

        tarjetas.forEach(tarjeta => {
            const tarjetaCategoria = tarjeta.getAttribute("data-category").toLowerCase();

            if (categoria === "all" || categoria === tarjetaCategoria) {
                tarjeta.style.display = "block"; 
            } else {
                tarjeta.style.display = "none"; 
            }
        });
    });
});


const galleryImages = document.querySelectorAll('.card-img-top');
 
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        const category = img.closest('[data-category]').getAttribute('data-category');

        
        window.location.href = `detalle.html?src=${src}&alt=${alt}&cat=${category}`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Script cargado correctamente");
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e){
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message= document.getElementById("message").value.trim();
        if (name ==="" || email === "" || message === ""){
            alert("Por favor, completa todos los campos.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("❌ Ingresa un correo electrónico válido.");
            return;
        }
        alert(`✅ Gracias ${name}, tu mensaje fue enviado correctamente.`);

        
        contactForm.reset();
    })
}
});