import React from 'react';
import T from 'prop-types';
import { Main } from './styled';

const Button = ( props ) => {
	const { icon, children, htmlType, onClick, className, type, events, ...other } = props;

	return (
		<Main
			type={htmlType}
			btnType={type}
			className={`${className}`}
			onClick={onClick}
			{...other}
		>
			<div className={'btn-content'}>
				{icon && <span className={'btn-icon'}>{icon}</span>}
				<span>{children}</span>
			</div>
		</Main>
	);
}


Button.defaultProps = {
	disabled: false,
	className: '',
	controlKey: '',
	size: 'normal',
	type: 'primary',
	keyCode: 0,
};

Button.propTypes = {
	disabled: T.bool,
	icon: T.oneOfType([T.string, T.node]),
	shortKey: T.string,
	keyCode: T.number,
	controlKey: T.oneOf(['ctrlKey', 'shiftKey', 'altKey', '']),
	className: T.string,
	onClick: T.func,
	size: T.oneOf(['normal', 'large']),
	type: T.oneOf([
		'primary',
		'danger',
		'transparent',
		'darkBlue'
	]),
};

export default Button;
