import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import { iconBeforeElement } from 'theme/mixins';

export const StyledCard = styled.li`
  display: flex;
  margin: 2rem 0.5rem;
  padding: 1rem;
  min-height: 9rem;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.09) 0px 1px 5px 0px;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    flex-wrap: nowrap;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.xs}) {
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-bottom: 0;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const StyledDate = styled.time`
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  ${iconBeforeElement};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 1.4rem;
  ${iconBeforeElement};
  @media (min-width: ${({ theme }) => theme.responsive.xs}) {
    margin-top: 0;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.xs}) {
    max-width: 30rem;
  }
`;
