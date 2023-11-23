//estas funciones permiten captar los id del html
const shopContent = document.getElementById("ShopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//creo un array vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">$${product.precio}</p>
      `;
  
    shopContent.append(content);
  
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);
  
    comprar.addEventListener("click", () => {
      const repeat = carrito.some(
        (repeatProduct) => repeatProduct.id === product.id
      );
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          nombre: product.nombre,
          img: product.img,
          precio: product.precio,
          cantidad: product.cantidad,
        });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
      }
    });
  });
};

getProducts();

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
};
//get item

