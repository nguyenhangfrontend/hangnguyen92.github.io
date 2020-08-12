import styled from 'styled-components';

const combineType = (type, theme) => {
  switch (type) {
    case 'primary':
      return { bg: theme.bluePrimary, color: theme.whitePrimary };
    case 'danger':
      return {
        bg: theme.redPrimary,
        color: theme.whitePrimary,
      };
    case 'darkBlue':
      return {
        bg: theme.darkBlue,
        color: theme.whitePrimary,
      };
    case 'transparent':
      return {
        bg: theme.transparent,
        color: theme.greenDark,
        keyColor: theme.greenDark,
      };
    default:
      return { bg: theme.greenDark, color: theme.whitePrimary};
  }
};

const combineSize = size => {
  switch (size) {
    case 'large':
      return '14px 27px';
    case 'small':
      return '6px 12px';
    default:
      return '8px 20px';
  }
};

const Main = styled('button')`
  width: ${({ width }) => width};
  cursor: pointer;
  & .btn-content {
    display: flex;
    align-items: center;
    justify-content: center;

    & .btn-icon {
      margin-right: 6px;
      width: 20px;
      display: block;
    }

    & .btn-short-key {
      display: block;
      margin-left: 6px;
      color: ${props => combineType(props.btnType, props.theme).keyColor};
    }
  }

  border-radius: 4px;
  border: none;
  padding: ${props => combineSize(props.size)};
  line-height: 1;
  background: ${props => combineType(props.btnType, props.theme).bg};
  color: ${props => combineType(props.btnType, props.theme).color};

  &:focus {
    border: none;
    outline: none;
  }
`;

export { Main };
