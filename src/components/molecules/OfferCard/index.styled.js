import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import { iconBeforeElement } from 'theme/mixins';

export const StyledList = styled.li`
  margin: 0 1rem 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.09) 0px 1px 5px 0px;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 12px 2px,
      rgba(0, 0, 0, 0.19) 2px 1px 5px 0px;
  }
`;

export const StyledButton = styled.a`
  display: flex;
  height: 8rem;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
`;

export const StyledLogo = styled.img`
  margin-left: 2rem;
  height: 3.4rem;
`;

export const StyledSection = styled.section`
  display: flex;
  width: 80rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  flex-basis: 25rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledWrapper = styled.div`
  flex-basis: 25rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledInfo = styled.span`
  padding: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
`;

export const StyledDate = styled.span`
  margin-right: 2rem;
  padding: 0.5rem 0;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
`;
