import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';
import { fetchBooks } from '../redux/books/books';

const Booklist = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookList = books.map((book) => (
    <Books
      key={Math.random()}
      type={book.category}
      title={book.title}
      author={book.author}
      id={book.item_id}
      currentChapter={book.progress.currentChapter}
      progress={book.progress.completed}
      percentage={book.percentage}
    />
  ));

  return (
    <div className="container">
      <div>
        <ul className="books">
          {bookList}
        </ul>
        <div className="horizontal-divider" />
        <section>
          <h2 className="form-title">ADD NEW BOOK</h2>
          <FormInput />
        </section>
      </div>
    </div>
  );
};

export default Booklist;
