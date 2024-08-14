class Book {
    constructor(title, description, author) {
      this.id = this.generateId();
      this.title = title;
      this.description = description;
      this.author = author;
    }
  
    generateId() {
      return Math.random().toString(36).substr(2, 9);
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(bookInfo) {
      const newBook = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
      this.books.push(newBook);
      return newBook;
    }
  
    getBooks() {
      return this.books;
    }
  
    removeBookById(id) {
      this.books = this.books.filter(book => book.id !== id);
    }
  
    getBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    updateBookById(id, info) {
      const book = this.getBookById(id);
      if (book) {
        if (info.title) book.title = info.title;
        if (info.description) book.description = info.description;
        if (info.author) book.author = info.author;
      }
      return book;
    }
  }
  
  // teste:
  
  const myLibrary = new Library();
  
  // adicionando um livro
  const newBook = myLibrary.addBook({
    title: 'é assim que acaba',
    description: 'Lily Bloom decide começar uma nova vida em Boston',
    author: 'Collen Hover'
  });
  
  console.log('Livro adicionado:', newBook);
  
  // todos os livros
  console.log('Todos os livros:', myLibrary.getBooks());
  
  // livro por ID
  const book = myLibrary.getBookById(newBook.id);
  console.log('Livro encontrado:', book);
  
  // atualizando um livro pelo ID
  const updatedBook = myLibrary.updateBookById(newBook.id, {
    title: 'é  assim que acaba - Updated',
    description: 'revisão',
  });
  console.log('Livro atualizado:', updatedBook);
  
  // removendo um livro pelo ID
  myLibrary.removeBookById(newBook.id);
  console.log('Todos os livros atualizados:', myLibrary.getBooks());
  