import useValidationSchema from '../schemas/dashboardFormValidationSchema';

export const getTypeConfig = (type) => {
  const { recommendedFormSchema, libraryFormSchema, pageFormSchema } =
    useValidationSchema();

  let schema;
  let title;
  let btn;

  switch (type) {
    case 'recommended':
      schema = recommendedFormSchema;
      title = 'Filters:';
      btn = 'To apply:';
      break;
    case 'library':
      schema = libraryFormSchema;
      title = 'Create your library:';
      btn = 'Add book';
      break;
    case 'reading':
      schema = pageFormSchema;
      title = 'Start page:';
      btn = 'To start';
      break;
    case 'diary':
      schema = pageFormSchema;
      title = 'Stop page:';
      btn = 'To stop';
      break;
  }
  return { schema, title, btn };
};
