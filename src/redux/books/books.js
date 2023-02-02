export function addBook(book) {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
}

export function deleteBook(book) {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  };
}

export default function booksReducer(books = [], action) {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...books, action.payload];

    case 'REMOVE_BOOK':
      return books.filter((book) => book.id !== action.payload.id);

    default:
      return books;
  }
}
