import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import FormInput from './FormInput';

const Booklist = () => {
  const books = useSelector((state) => state.book);

  const bookList = books.map((book) => (
    <Books key={Math.random()} author={book.author} title={book.title} id={book.item_id} />
  ));

  return (
    <div>
      <h2>My Book List</h2>
      {bookList}
      <FormInput />
    </div>
  );
};

export default Booklist;
