import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Books = (props) => {
  const { author, title, id } = props;

  const dispatch = useDispatch();

  const handleDeletion = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <button type="button" onClick={handleDeletion}>Remove Book</button>
    </div>
  );
};

Books.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

Books.defaultProps = {
  author: '',
  title: '',
  id: '',
};

export default Books;
