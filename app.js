const form = document.getElementById("form");
const resetButton = document.getElementById("reset_button");
const productsSection = document.getElementById("products");

const addProduct = (product) => {
  const productTemplate = `
        <article class="products__card">
                <div class="card__image">
                    <img src="${product.img}">
                </div>
                <h3 class="card__title">${product.title}</h3>
                <div class="card__footer">
                    <p class="card__price"><span>$</span> ${product.price}</p>
                </div>
            </article>
    `;

    productsSection.insertAdjacentHTML("beforeend", productTemplate);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  if (data.get("name") && data.get("price") && data.get("image")) {
    addProduct({
        img: data.get("image"),
        price: data.get("price"),
        title: data.get("name"),
    })
    alert('producto agregado con éxito 👍')
    form.reset()
    return
  }

  alert('Rellena todos los campos correspondientes 😿')
});


resetButton.addEventListener('click', () => {
    form.reset()
})