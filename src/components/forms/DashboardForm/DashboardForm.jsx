import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../../uikit/Input/Input';

import useValidationSchema from '../../../schemas/dashboardFormValidationSchema';
import { getTypeConfig } from '../../../helpers/getTypeConfig';

import ValidationIconsAndMsg from '../AuthForm/ValidationIconsAndMsg/ValidationIconsAndMsg';
import Button from '../../../uikit/Button/Button';

import s from './DashboardForm.module.css';

//3 types :
//1 - recommended
//2 - library
//3 - eading
//4 - diary

const DashboardForm = ({ type }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { schema, title, btn } = getTypeConfig(type);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      author: '',
      pages: '',
      page: '',
    },
  });

  const onSubmitHandler = async () => {
    //   setIsDisabled(true);
    // setIsDisabled(false);
  };

  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>{title}</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        {(type === 'recommended' || type === 'library') && (
          <>
            <div className={s.inputIconsMessageBox}>
              {/* Book title: */}
              <Input
                //   id="text"
                id="title"
                label="Book title:"
                type="text"
                {...register('title')}
                placeholder="Enter text"
                // className="nameInput"
                error={errors.title?.message}
                valid={dirtyFields?.title && !errors.title?.message}
              />
              <ValidationIconsAndMsg
                errorMsg={errors.title?.message}
                dirtyField={dirtyFields?.title}
                fieldName="title"
              />
            </div>

            <div className={s.inputIconsMessageBox}>
              <Input
                // id="text"
                id="author"
                label="The author:"
                type="text"
                {...register('author')}
                placeholder="Enter text"
                // className="nameInput"
                error={errors.author?.message}
                valid={dirtyFields?.author && !errors.author?.message}
              />
              <ValidationIconsAndMsg
                errorMsg={errors.author?.message}
                dirtyField={dirtyFields?.author}
                fieldName="author"
              />
            </div>
          </>
        )}

        {type === 'library' && (
          <div className={s.inputIconsMessageBox}>
            <Input
              id="pages"
              label="Number of pages:"
              type="pages"
              {...register('pages')}
              //   className="mailInput"
              error={errors.pages?.message}
              valid={dirtyFields?.pages && !errors.pages?.message}
            />
            <ValidationIconsAndMsg
              errorMsg={errors.pages?.message}
              dirtyField={dirtyFields?.pages}
              fieldName="pages"
            />
          </div>
        )}

        {(type === 'reading' || type === 'diary') && (
          <div className={s.inputIconsMessageBox}>
            <Input
              id="page"
              label="Page number:"
              type="page"
              {...register('page')}
              //   className="mailInput"
              error={errors.page?.message}
              valid={dirtyFields?.page && !errors.page?.message}
            />
            <ValidationIconsAndMsg
              errorMsg={errors.page?.message}
              dirtyField={dirtyFields?.page}
              fieldName="page"
            />
          </div>
        )}

        <Button
          type="submit"
          title={btn}
          className="dashboard-btn"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default DashboardForm;
