export class Producto {
  static items = [];

  constructor(codigo, nombre, precio, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
  static agregar(producto) {
    Producto.items.push(producto);
  }
  static eliminar(codigo) {
    Producto.items = Producto.items.filter((p) => p.codigo != codigo);
  }
}
