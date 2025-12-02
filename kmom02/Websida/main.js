import auth from "../models/auth.js";

async function renderProducts() {
  const response = await fetch(`${auth.api_url}/products?api_key=${auth.api_key}`);
  const result = await response.json();
  const productList = document.getElementById("product-list");

  const productArray = result.data.map((product) => {
    return `
      <article class="product">
        <img src="${product.image_url}" alt="Album art ${product.name}" />
        <h3>${product.name}</h3>
      </article>
    `;
  });

  productList.innerHTML = productArray.join("");
}

// call it ONCE
renderProducts();
