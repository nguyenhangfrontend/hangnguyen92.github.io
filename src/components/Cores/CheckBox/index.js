import React from 'react';
import T from 'prop-types';
import CheckedIcon from 'resources/svg/checked.svg';
import CheckedWhiteIcon from 'resources/svg/checked-white.svg';
import { Main } from './styled';

const CheckBox = (props) => {
	const { checked, children, size, type, className, onChange, ...other } = props;
	const onChange = (e) => {

		const { onChange} = props;
		if (onChange) {
			onChange(e.target.value);
		}
	};

	

	return (
		<Main size={size} className={className}>
			<input onChange={onChange} type="checkbox" checked={checked} {...other} />
			<div className={'check-box-label'}>{children}</div>
		</Main>
	);

}

CheckBox.defaultProps = {
	className: '',
	size: 22,
	checked: false,
	valueExport: false,
};

CheckBox.propTypes = {
	size: T.number,
	checked: T.bool,
	valueExport: T.bool,
	value: T.any,
	className: T.string,
	type: T.oneOf(['transparent', 'pink', 'dark', 'gray'])
};

export default CheckBox;
