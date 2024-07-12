export const setValidationMsg = (field) => {
  const formatedField = field?.charAt(0).toUpperCase() + field?.slice(1);

  const ERROR_MESSAGE = `Enter a valid  ${field}`;
  const REQUIRED_MESSAGE = `${formatedField} is required`;
  // const SUCCESS_MESSAGE = `${formatedField} is secure`;

  return { ERROR_MESSAGE, REQUIRED_MESSAGE };
};
