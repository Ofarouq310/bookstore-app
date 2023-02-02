const CHECK_STATUS = 'categories/categories/CHECK_STATUS';
const categories = [];

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

export default function categoriesReducer(state = categories, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
