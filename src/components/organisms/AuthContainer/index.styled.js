import styled, { css } from 'styled-components';
import Link from 'components/atoms/Link';

export const StyledInnerWrapper = styled.div`
  padding: 2rem 0;
  width: 32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledSpan = styled.span`
  padding-bottom: 0.8rem;
  border-bottom: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
    `}
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: none;
  color: ${({ theme }) => theme.colors.secondaryBlue};
  :hover {
    text-decoration: underline;
  }
  ${({ home }) =>
    home &&
    css`
      margin: 1rem;
      padding: 1rem;
      width: 28rem;
      text-align: center;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryGrey};
    `}
`;
