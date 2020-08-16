import styled from 'styled-components';

const Main = styled('div')`
	border-radius: 4px;
	background-color: ${props => props.theme['white-blur']};
	box-shadow: 0 0 6px #ddd;
	& .c-card-title {
		text-transform: uppercase;
		font-size: 14px;
		text-align: center;
		font-weight: bold;
	}
	
	& .card-head {
		padding: 12px;
	}
	
	& .card-body {
		padding: 12px;
		height: ${props => props.scrollHeight || 'unset'}px;
	}
	
	& .card-foot {
		padding: 12px;
	}
`;

export { Main };
