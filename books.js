function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages " + ", " +
        readStatus(read);
       
    }
}

function readStatus(read) {
     if (read) {
            return "It has already been read";
        }
        else {
            return "not read yet";
        }
}


function displayLibrary() {
    for (const [index, book] of myLibrary.entries()) {
        const bookCard = document.createElement("div");
        bookCard.className = "div-" + index;

        const title = document.createElement("h4");
        title.textContent = book.title;

        const ul = document.createElement("ul");

        const author = book.author;
        const authorLi = document.createElement("li");
        authorLi.textContent = "by " + author + ".";

        const pages = book.pages;
        const pagesLi = document.createElement("li");
        pagesLi.textContent = pages + " Pages."

        ul.append(authorLi, pagesLi);

        const readCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.id = "readCheckbox";
        readCheckbox.checked = book.read;
        const label = document.createElement("label");
        label.htmlFor = "readCheckbox";
        label.textContent = "Read";
        const readContainer = document.createElement("div");
        readContainer.append(readCheckbox, label);
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove";
        removeBtn.id = index;

        bookCard.append(title, ul, readContainer, removeBtn);
        document.body.appendChild(bookCard);
    }
}

function displayBook(book) {
    const index = myLibrary.length;
    const bookCard = document.createElement("div");
    bookCard.className = "div-" + index;

    const title = document.createElement("h4");
    title.textContent = book.title;

    const ul = document.createElement("ul");

    const author = book.author;
    const authorLi = document.createElement("li");
    authorLi.textContent = "by " + author + ".";

    const pages = book.pages;
    const pagesLi = document.createElement("li");
    pagesLi.textContent = pages + " Pages."

    ul.append(authorLi, pagesLi);

    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.id = "readCheckbox";
    readCheckbox.checked = book.read;
    const label = document.createElement("label");
    label.htmlFor = "readCheckbox";
    label.textContent = "Read";
    const readContainer = document.createElement("div");
    readContainer.append(readCheckbox, label);
    
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove"
    removeBtn.id = index;

    bookCard.append(title, ul, readContainer, removeBtn);
    document.body.appendChild(bookCard);
}

const book1 = new Book("Youtubea", "Ahmed Khaled Tawfik", 142, true);
const myLibrary = [book1];
const addButton = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const addBookForm = document.getElementById("addBookForm");
const closeDialog = document.getElementById("close-dialog");

addButton.addEventListener("click", 
 () => {dialog.showModal();
 });
 closeDialog.addEventListener("click", () => {
    dialog.close();
    addBookForm.reset();
 });
 addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addBookForm);
    const newBook = new Book(formData.get("title"),
        formData.get("author"), formData.get("pages"),
         formData.get("read"));
    myLibrary.push(newBook);
    displayBook(newBook);  
    dialog.close();     
    addBookForm.reset();
 })

 const removeBtns = document.getElementsByClassName("remove");

 
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
    const divToRemove = document.querySelector(".div-" + e.target.id);
    divToRemove.remove(); }
})

 
 displayLibrary();
 