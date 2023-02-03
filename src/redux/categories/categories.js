const CHECK_STATUS = 'categories/categories/CHECK_STATUS';
const categories = [];

export function checkStatus() {
  return {
    type: CHECK_STATUS,
    payload: 'Under Construction',
  };
}

export default function categoriesReducer(state = categories, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
}
