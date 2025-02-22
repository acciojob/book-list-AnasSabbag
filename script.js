function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    // Validation: Ensure all fields are filled
    if (title === "" || author === "" || isbn === "") {  
        alert("Please fill in all fields.");
        return;
    }

    let booksList = document.getElementById("book-list");
    const bookRow = document.createElement("tr");

    bookRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>
            <button class="delete" onclick="deleteBook(this)">x</button>
        </td>
    `;

    booksList.appendChild(bookRow);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

// Function to delete a book row
function deleteBook(button) {
    button.parentElement.parentElement.remove();
}
