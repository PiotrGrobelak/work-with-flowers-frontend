import styled from 'styled-components';

export const StyledInput = styled.input`
  margin: ${({ small }) => (small ? '0.6rem 0' : '1rem 0')};
  padding: ${({ small }) => (small ? '0.4rem 0.2rem' : '0.8rem 1.6rem')};
  height: ${({ textarea }) => (textarea ? '20rem' : 'auto')};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  outline: none;
  ${({ textarea }) => textarea && 'resize: none'};
  :hover,
  :focus {
    box-shadow: 0 0 1px 2px ${({ theme }) => theme.colors.secondaryBlue};
  }
`;
