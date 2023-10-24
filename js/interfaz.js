
const compraForm = document.getElementById("compraForm");
const categoriaSelect = document.getElementById("categoriaSelect");
const productoSelect = document.getElementById("productoSelect");
const cantidadInput = document.getElementById("cantidadInput");
const tablaCuerpo = document.getElementById("tablaCuerpo");

compraForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe
});

categoriaSelect.addEventListener("change", function () {
    const categoria = categoriaSelect.value;
    const productos = precios[categoria];
    productoSelect.innerHTML = ""; // Limpiar opciones anteriores

    for (const producto in productos) {
        const option = document.createElement("option");
        option.value = producto;
        option.textContent = producto;
        productoSelect.appendChild(option);
    }
});

categoriaSelect.dispatchEvent(new Event('change'));