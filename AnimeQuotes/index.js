"use strict";

const animeName = document.querySelector(".anime");
const quote = document.querySelector(".quotes");
const author = document.querySelector(".author");

function pushElement(dataObj) {
  document.querySelector(".anime").textContent = dataObj.anime;
  document.querySelector(".quotes").textContent = dataObj.quote;
  document.querySelector(".author").textContent = ` --${dataObj.character}`;
  //   console.log(dataObj);
  //   console.log(dataObj.anime);
  //   console.log(dataObj.quote);
  //   console.log(dataObj.character);
}
function getData() {
  return fetch("https://animechan.xyz/api/random").then((response) =>
    response.json()
  );
}
getData().then((res) => {
  pushElement(res);
});

document.querySelector(".btn").addEventListener("click", () => {
  getData().then((res) => {
    pushElement(res);
  });
});
