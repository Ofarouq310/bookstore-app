import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const FormInput = () => {
  const [data, setData] = React.useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const dispatch = useDispatch();
  const inputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...data,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <form className="add-form">
        <input
          className="input title-input"
          type="text"
          name="title"
          placeholder="Book title"
          onChange={inputChange}
          value={data.title}
        />
        <input
          className="input author-input"
          type="text"
          name="author"
          placeholder="Author"
          onChange={inputChange}
          value={data.author}
        />
        <button type="submit" onClick={handleSubmit} className="primary-button-big">Add Book</button>
      </form>
    </div>
  );
};
export default FormInput;
