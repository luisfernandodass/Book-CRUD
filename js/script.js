// Pega o button.
const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook");

let ul = document.getElementById("list-ul");



// Ativa o button no click
button.addEventListener("click", function(){

 let li = document.createElement("li");
  li.className = 'list';

  li.setAttribute('id', getInput.value);
  li.appendChild(document.createTextNode(getInput.value));
  ul.appendChild(li);
  
})