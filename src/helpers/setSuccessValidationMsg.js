
export const setSuccessValidationMsg = (field, isDirty) => {
  if (!isDirty) return;

  const formatedField = field?.charAt(0).toUpperCase() + field?.slice(1);

  return `${formatedField} is secure`;
};
