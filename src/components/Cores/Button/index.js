import React from 'react';
import Button from './Main';
import KeyEventWrapper from '../KeyEventWrapper';

const ButtonWrap = props => {
  const {
    keyCode,
    controlKey,
    onClick,
    disabled,
    forwardRef,
    ...other
  } = props;

  const handleOnClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
      <Button
        ref={forwardRef}
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
