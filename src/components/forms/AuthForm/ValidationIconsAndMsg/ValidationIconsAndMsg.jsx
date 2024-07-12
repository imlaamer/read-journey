import Icon from '../../../common/Icon/Icon';
import ValidationMessage from './ValidationMessage/ValidationMessage';
import { setSuccessValidationMsg } from '../../../../helpers/setSuccessValidationMsg';

import s from './ValidationIconsAndMsg.module.css';

const ValidationIconsAndMsg = ({ errorMsg, dirtyField, fieldName }) => {
  return (
    <>
      {errorMsg && (
        <Icon id="invalid" stroke="none" className="validationIcon" />
      )}
      {dirtyField && !errorMsg && (
        <Icon id="valid" stroke="none" className="validationIcon" />
      )}
      <ValidationMessage
        msg={errorMsg || setSuccessValidationMsg(fieldName, dirtyField)}
        isError={errorMsg}
      />
    </>
  );
};

export default ValidationIconsAndMsg;
