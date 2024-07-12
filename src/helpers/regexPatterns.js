// --------auth--------
export const USER_NAME_REGEX =
  /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+([- ][a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+)*$/;

export const PASSWORD_REGEX = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\w\d]{8,64}$/;


export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//- що за вираз - інше повідомлення ?

//було-
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// --------books--------
export const BOOK_TITLE_REGEX = /^[\w\s,.!?()-]{1,100}$/;


export const AUTHOR_NAME_REGEX = /^[\p{L}\s.'-]{1,50}$/;

export const PAGES_REGEX = /^[1-9][0-9]{0,5}$/;



