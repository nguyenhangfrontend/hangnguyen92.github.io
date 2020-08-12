import React from 'react';
import Button from './Main';

const ButtonWrap = props => {
  const {
    onClick,
    disabled,
    ...other
  } = props;

  const handleOnClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
      <Button
        {...other}
        onClick={handleOnClick}
        disabled={disabled}
      />
  );
};

ButtonWrap.defaultProps = {
  disabled: false,
  className: '',
  controlKey: '',
  size: 'normal',
  type: 'primary',
  keyCode: 0,
};

ButtonWrap.propTypes = {
  ...Button.propTypes,
};

export default ButtonWrap;
