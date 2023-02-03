const CREATE_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

export function addBook(book) {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
}

export function deleteBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
}

const initialState = [
  {
    item_id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    item_id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
  },
  {
    item_id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
}
