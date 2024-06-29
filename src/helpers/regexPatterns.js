export const USER_NAME_REGEX =
  /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+([- ][a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+)*$/;

export const PASSWORD_REGEX = /^[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\w\d]{8,64}$/;


export const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//- що за вираз - інше повідомлення ?

//було-
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
