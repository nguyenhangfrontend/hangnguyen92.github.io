import React, { memo, useState } from 'react';
import { Main } from './styled';
import T from 'prop-types';

const FormItem = (props, ref) => {
  const [error, setError] = useState('');
  const {
    label,
    require,
    requireAfter,
    value,
    placeholder,
    onChange,
    initialValue,
    onBlur,
    onKeyDown,
    inputComponent,
    options,
    className,
    disabled,
    rules,
    selectAddress,
  } = props;

  const onFieldChange = output => {
    if(onChange){
      onChange(output);
    }
    
  };


  return (
    <Main className={className}>
      {label && <span className={`label-input`}>
        {label}
      </span>}
      <div className="input-content">
        {React.createElement(inputComponent, {
          value,
          placeholder,
          onChange: onFieldChange,
          onBlur,
          onKeyDown,
          selectAddress,
          options,
          disabled,
          initialValue,
          className: 'form-control',
        })}
      </div>
    </Main>
  );
};

FormItem.defaultProps = {
  label: '',
  error: '',
  require: false,
  onValidate: false,
  disabled: false,
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  selectAddress: () => {},
  inputComponent: null,
  options: [],
  rules: [],
  className: '',
};

FormItem.propTypes = {
  label: T.oneOfType([T.string, T.node]),
  error: T.string,
  require: T.bool,
  onValidate: T.bool,
  disabled: T.bool,
  value: T.any,
  placeholder: T.string,
  onChange: T.func,
  onBlur: T.func,
  onKeyDown: T.func,
  selectAddress: T.func,
  inputComponent: T.node,
  options: T.array,
  rules: T.arrayOf(T.shape({})),
  className: T.string,
};

export default memo(FormItem);
