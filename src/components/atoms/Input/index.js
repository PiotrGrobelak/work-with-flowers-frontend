import styled from 'styled-components';

const Input = styled.input`
  margin: ${({ small }) => (small ? '6px 0' : '10px 0')};
  padding: ${({ small }) => (small ? '4px 2px' : '8px 16px')};
  height: ${({ textarea }) => (textarea ? '200px' : 'auto')};
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

export default Input;
