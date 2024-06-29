import IconsSprite from '../../../assets/static/icons/sprite.svg';

import s from './Icon.module.css';

const Icon = ({
  id,
  className = 'icon',
  width = '20',
  height = '20',
  fill = 'none',
  stroke = '#F9F9F9',
}) => {
  return (
    <svg
      className={s[className]}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${IconsSprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
