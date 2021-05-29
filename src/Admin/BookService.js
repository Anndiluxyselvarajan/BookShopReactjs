import axios from 'axios';

const BOOKS_API_BASE_URL = 'https://abcbookshop.herokuapp.com/api/books';

class BookService {

    fetchBooks() {
        return axios.get(BOOKS_API_BASE_URL);
    }

    fetchBookById(bookId) {
        return axios.get(BOOKS_API_BASE_URL + '?id=' + bookId);
    }

    deleteBook(bookId) {
        return axios.delete(BOOKS_API_BASE_URL + '/' + bookId);
    }

    addBook(book) {
        return axios.post(BOOKS_API_BASE_URL, book);
    }

    editBook(book) {
        return axios.put(BOOKS_API_BASE_URL + '/' + book.id, book);
    }
   

}

export default new BookService();