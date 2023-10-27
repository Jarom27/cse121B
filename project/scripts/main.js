import { getBooks } from "./getBooks.js";
const booksShelf = document.getElementById("book-list");
const displayBooks = async () => {
    const books = await getBooks("https://gutendex.com/books");
    books.results.forEach(book => {
        let listElement = document.createElement("li");
        let subjectsString = `${book.subjects}`
        listElement.innerHTML = `
            <article>
                <h3>${book.title}</h3>
                <h4>Authors</h4>
                <ul class = "authors">
                    ${book.authors.map(author => `<li>${author.name}</li>`)}
                </ul>
                <p class = "subjects">${subjectsString}</p>
                <div class = "footer">
                    ${book.copyright ? `<span class = "tag">Copyright</span>` : ""}
                    <p>Downloads: ${book.download_count}</p>
                </div>
            </article>
        `;
        booksShelf.appendChild(listElement);
    });
};
displayBooks();
