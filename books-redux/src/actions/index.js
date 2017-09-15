export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return an action,
  // an object w/ a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
