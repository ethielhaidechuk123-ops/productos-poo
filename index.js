import { Producto } from "./classes/Producto.js";

const form = document.getElementById("formProducto");
const tabla = document.getElementById("tablaProductos");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const imagen = document.getElementById("imagen").value;

  const nuevoProducto = new Producto(codigo, nombre, precio, imagen);

  Producto.agregar(nuevoProducto);
  insertarEnTabla(nuevoProducto);
  form.reset();
});

function insertarEnTabla(producto) {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td class="border p-2">${producto.codigo}</td>
    <td class="border p-2">${producto.nombre}</td>
    <td class="border p-2">$${producto.precio}</td>
    <td class="border p-2"><img src="${producto.imagen}" class="w-12" /></td>
    <td class="border p-2">
      <button class="btnEliminar bg-red-500 text-white px-2">Eliminar</button>
    </td>
  `;
  const btnEliminar = fila.querySelector(".btnEliminar");
  btnEliminar.addEventListener("click", function () {
    Producto.eliminar(producto.codigo);
    fila.remove();
  });

  tabla.appendChild(fila);
}
