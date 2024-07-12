import { setValidationMsg } from './setValidationMsg';

//---------------NAME
// export const USER_NAME_SUCCESS_MESSAGE = 'Name is secure';
export const USER_NAME_ERROR_MESSAGE = 'Enter a valid name';
export const REQUIRED_USER_NAME_MESSAGE = 'Name is required';

//---------------EMAIl
// export const EMAIL_SUCCESS_MESSAGE = 'Mail is secure';
export const EMAIL_ERROR_MESSAGE = 'Use the format example@test.com';
export const REQUIRED_EMAIL_MESSAGE = 'Email is required';

//---------------PASSWORD
// export const PASSWORD_SUCCESS_MESSAGE = 'Password is secure';
export const PASSWORD_ERROR_MESSAGE = 'The password is min 7'; //8 and max 64 //Enter a valid Password* ?
export const REQUIRED_PASSWORD_MESSAGE = 'Password is required';

//---------------BOOK TITLE
// export const BOOK_TITLE_SUCCESS_MESSAGE = setValidationMsg('book title').SUCCESS_MESSAGE;
export const BOOK_TITLE_ERROR_MESSAGE =
  setValidationMsg('book title').ERROR_MESSAGE;
export const REQUIRED_BOOK_TITLE_MESSAGE =
  setValidationMsg('book title').REQUIRED_MESSAGE;

//---------------AUTHOR NAME
// export const AUTHOR_SUCCESS_MESSAGE = setValidationMsg('author name').SUCCESS_MESSAGE;
export const AUTHOR_ERROR_MESSAGE =
  setValidationMsg('author name').ERROR_MESSAGE;
export const REQUIRED_AUTHOR_MESSAGE =
  setValidationMsg('author name').REQUIRED_MESSAGE;

//---------------PAGES
// export const PAGES_SUCCESS_MESSAGE = setValidationMsg('number of pages').SUCCESS_MESSAGE;
export const PAGES_ERROR_MESSAGE =
  setValidationMsg('number of pages').ERROR_MESSAGE;
export const REQUIRED_PAGES_MESSAGE =
  setValidationMsg('number of pages').REQUIRED_MESSAGE;

//---------------PAGE
// export const PAGE_SUCCESS_MESSAGE =
//   setValidationMsg('page number').SUCCESS_MESSAGE;
export const PAGE_ERROR_MESSAGE = setValidationMsg('page number').ERROR_MESSAGE;
export const REQUIRED_PAGE_MESSAGE =
  setValidationMsg('page number').REQUIRED_MESSAGE;

//Recommendations  BLOCK

//Filters: (to apply)
// Book title
//The author

//My library  BLOCK
//Create your library: ( add book)
//1 Book title -||-
//2 The author -||-
//3 Number of pages

//My reading  BLOCK
//Start pages (to start)
//page number -||-

//Stop page: (to stop)
//page number -||-

// export const BOOK_TITLE_MESSAGE = 'Book title is secure';
// export const BOOK_TITLE_ERROR_MESSAGE = 'Enter a valid book title';
// export const REQUIRED_BOOK_TITLE_MESSAGE = 'Book title is required';

// export const AUTHOR_MESSAGE = 'Author name is secure';
// export const AUTHOR_ERROR_MESSAGE = 'Enter a valid author name';
// export const REQUIRED_AUTHOR_MESSAGE = 'Author name is required';

// export const PAGES_MESSAGE = 'Number of pages is secure';
// export const PAGES_ERROR_MESSAGE = 'Enter a valid number of pages';
// export const REQUIRED_PAGES_MESSAGE = 'Number of pages is required';

// export const PAGE_MESSAGE = 'Page number is secure';
// export const PAGE_ERROR_MESSAGE = 'Enter a valid page number ';
// export const REQUIRED_PAGE_MESSAGE = 'Page number is required';
