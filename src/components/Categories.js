import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container">
      <h1>{categories}</h1>
      <button type="button" onClick={handleStatus} className="primary-button">Check Status</button>
    </div>
  );
};

export default Categories;
