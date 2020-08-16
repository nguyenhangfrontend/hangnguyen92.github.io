import React from 'react';
import T from 'prop-types';
import { Main } from './styled';

const CheckBox = (props) => {
	const { checked, children, size, type, className, onChange, ...other } = props;
	const handleChange = (e) => {

		const { onChange} = props;
		if (onChange) {
			onChange(e.target.checked);
		}
	};

	

	return (
		<Main size={size} className={className}>
			<input type="checkbox" {...other} checked={checked} onChange={handleChange} />
			<span className="check-mark"></span>
			<label className={'check-box-label'}>{children}</label>
		</Main>
	);

}

CheckBox.defaultProps = {
	className: '',
	size: 22,
	checked: false,
};

CheckBox.propTypes = {
	size: T.number,
	checked: T.bool,
	value: T.any,
	className: T.string,
	type: T.oneOf(['transparent', 'pink', 'dark', 'gray'])
};

export default CheckBox;
