let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("products");

function renderProducts(){
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" onclick="view(${p.id})">
        <h3>${p.name}</h3>
        <p>KSh ${p.price}</p>
        <p>${p.stock > 0 ? p.stock + " left" : "OUT OF STOCK"}</p>

        <button onclick="addToCart(${p.id})" ${p.stock===0?'disabled':''}>
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id){
  const item = products.find(p=>p.id===id);
  cart.push(item);
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to basket");
}

function view(id){
  localStorage.setItem("selected",id);
  window.location.href = "product.html";
}

renderProducts();
