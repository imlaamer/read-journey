// dashboardFormValidationSchema;

import * as Yup from 'yup';

import {
  BOOK_TITLE_REGEX,
  AUTHOR_NAME_REGEX,
  PAGES_REGEX,
} from '../helpers/regexPatterns';
import {
  AUTHOR_ERROR_MESSAGE,
  BOOK_TITLE_ERROR_MESSAGE,
  PAGES_ERROR_MESSAGE,
  PAGE_ERROR_MESSAGE,
  REQUIRED_AUTHOR_MESSAGE,
  REQUIRED_BOOK_TITLE_MESSAGE,
  REQUIRED_PAGES_MESSAGE,
  REQUIRED_PAGE_MESSAGE,
} from '../helpers/constants';

const useValidationSchema = () => {
  const baseValidationSchema = {
    title: Yup.string()
      .trim()
      .required(REQUIRED_BOOK_TITLE_MESSAGE)
      .matches(BOOK_TITLE_REGEX, BOOK_TITLE_ERROR_MESSAGE),

    author: Yup.string()
      .trim()
      .required(REQUIRED_AUTHOR_MESSAGE)
      .matches(AUTHOR_NAME_REGEX, AUTHOR_ERROR_MESSAGE),
  };

  const recommendedFormSchema = Yup.object().shape({
    ...baseValidationSchema,
  });

  const libraryFormSchema = Yup.object().shape({
    ...baseValidationSchema,
    pages: Yup.string()
      .trim()
      .required(REQUIRED_PAGES_MESSAGE)
      .matches(PAGES_REGEX, PAGES_ERROR_MESSAGE),
  });

  const pageFormSchema = Yup.object().shape({
    page: Yup.string()
      .trim()
      .required(REQUIRED_PAGE_MESSAGE)
      .matches(PAGES_REGEX, PAGE_ERROR_MESSAGE),
  });

  return { recommendedFormSchema, libraryFormSchema, pageFormSchema };
};
export default useValidationSchema;
