var containerOfBook = document.getElementById("containerOfBook");
var container = document.getElementById("container-booksReadsList"); // Container branco
var buttonToAdd  = document.getElementById("toAdd"); // Botão de adicionar
var counter = document.getElementById("counter");  // Conta a quantidade de livros


function addBook(e){
  container.className = "container-booksReadsList"
  let getInput = document.getElementById("inputBook"); // Pega o nome do livro no input.
  
  let row = document.createElement("tr");    // Cria a linha do livro
  row.setAttribute("id", getInput.value);    // Atualizar o valor do ID para o nome do livro.
  row.className += 'containerRow'; 
  row.innerHTML += '<p class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye"></i><i class="fas fa-pen-square pen" ></i><i class="fas fa-minus-circle delete" onclick="removeBook()"></i></div> ';
  
  containerOfBook.appendChild(row); // Adiciona o livro na tabela
 
  
  let qntdBook = document.getElementsByTagName('tr').length; // Incrementa a quantidade de livros, conforme o user for adicionando.
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}

function removeBook(e){
  let row = document.querySelector('.containerRow');  

  if(containerOfBook){
    containerOfBook.removeChild(row); // Remove o livro da tabela
   
    let qntdBook = document.getElementsByTagName('tr').length--;  // Decrementa a quantidade de livros, conforme o user for excluindo.
    if(qntdBook === 0){
      counter.textContent =  ""; // Remove a contagem dos livros.
      container.className = ""   // Remove o container branco.
    } else if (qntdBook === 1) {
       counter.textContent =  qntdBook + " livros lido";
    } else {
       counter.textContent =  qntdBook + " livros lidos";
    }   
  }
}

buttonToAdd.addEventListener('click', addBook, false);

