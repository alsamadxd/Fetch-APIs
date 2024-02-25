"use strict";

const mainEl = document.querySelector(".main");

function cardElement(price, imgUrl, description, rating, title, id, count) {
  return `
        <article id=${id}>
        <div class="image-container">
          <img
            src=${imgUrl}
            alt=""
           
          />
          </div>
          <div class="descp">
            <h3 class="title">
              ${title}
            </h3>
            <p class="description">
              ${description}
            </p>
            <p class="rating">${rating} <span>${count}</span></p>
            <h3 class="price">$ ${price}</h3>
          </div>
        </article>
      `;
}

function getData(url) {
  return fetch(url).then((res) => res.json());
}

getData("https://fakestoreapi.com/products").then((data) => {
  for (let i of data) {
    const getEl = cardElement(
      i.price,
      i.image,
      i.description,
      i.rating[0],
      i.title,
      i.id,
      i.rating[1]
    );
    pushData(getEl, i.id);
  }
  //   const anchorEl = document.getElement("a");
  //   anchorEl.addEventListener("click", (e) => {
  //     e.preventDefault();
  //   });
  console.log(data);
});

function pushData(getEl, id) {
  const createEl = document.createElement("a");
  createEl.href = id;

  mainEl.appendChild(createEl);

  createEl.innerHTML = getEl;
  createEl.onclick = (e) => {
    e.preventDefault();

    window.history.pushState({ page: "index.html" }, "fakestore.com", `${id}`);

    // const storeHref = createEl.getAttribute("href");

    // console.log(storeHref);

    // Add a function to create this Element detail page and remove
    // all the other elements

    elmentByid(id);
  };
}
