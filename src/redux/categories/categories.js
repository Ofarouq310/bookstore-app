export function checkStatus() {
  return {
    type: 'CHECK_STATUS',
  };
}

export default function categoriesReducer(categories = [], action) {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'Under Construction';
    default:
      return categories;
  }
}
