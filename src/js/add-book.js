import { counterIncrease } from "./counter-book.js";
import {seeBook} from "./see-book.js";
import {deleteBook} from "./delete-book.js";
import { saveBookInStorage,  } from "./localstorage.js"
import '/src/css/global.css';
import '/src/css/index.css';
import '/src/css/main.css'

function addBook() {
  const btnAddBook = document.querySelector(".toAdd");
  btnAddBook.addEventListener("click", (e) => {
    e.preventDefault();
    const table = document.querySelector(".table");
    const input = document.querySelector(".inputBook");
    const row = document.createElement("tr");
    const p = document.createElement("p");
    const spanActions = document.createElement("span");

    row.classList.add("containerRow");
    p.classList.add("nameBook");
    spanActions.classList.add("actions");
    p.innerHTML += input.value;
    spanActions.innerHTML = `
    <i class="fas fa-eye eye"></i>
    <i class="fas fa-pen-square pen"></i>
    <i class="fas fa-minus-circle delete"></i>
    `;
    row.innerHTML += `${p.outerHTML} ${spanActions.outerHTML}`;

  

    table.appendChild(row);
    counterIncrease();
    seeBook();
    deleteBook();
    saveBookInStorage(row)
  });
}
addBook();


function createAndShowElement() {
  const body = document.querySelector('body');
  const container = document.querySelector('.box');

  body.appendChild(container);
}

createAndShowElement();