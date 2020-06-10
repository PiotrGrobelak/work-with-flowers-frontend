import styled from 'styled-components';

const Select = styled.select`
  display: block;
  margin: 10px 0;
  padding: 6px 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.2;
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  appearance: none;
  border: none;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  letter-spacing: 0.7px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat, repeat;
  background-position: right 5px top 50%, 0 0;
  background-size: 22px;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 0 0 1px 2px ${({ theme }) => theme.colors.secondaryBlue};
  }
  :focus {
    box-shadow: 0 0 1px 2px ${({ theme }) => theme.colors.secondaryBlue};

    outline: none;
  }
`;

export default Select;
