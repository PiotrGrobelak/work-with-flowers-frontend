import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import { iconBeforeElement } from 'theme/mixins';

export const StyledItem = styled.li`
  margin: 0 0.2rem 1.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.09) 0px 1px 5px 0px;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin: 0 1rem 1.2rem;
    transition: box-shadow 0.2s ease-in-out;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 12px 2px,
        rgba(0, 0, 0, 0.19) 2px 1px 5px 0px;
    }
  }
`;

export const StyledButton = styled.a`
  display: flex;
  height: 8rem;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    justify-content: space-between;
  }
`;

export const StyledLogo = styled.img`
  margin-left: 0.5rem;
  height: 3.4rem;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-left: 2rem;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    width: 80rem;
  }
`;

export const StyledHeading = styled(Heading)`
  flex-basis: 20rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    flex-basis: 25rem;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-basis: 25rem;
  flex-direction: column;
  text-align: left;
`;

export const StyledInfo = styled.span`
  padding: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
`;

export const StyledDate = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-right: 2rem;
  }
`;
