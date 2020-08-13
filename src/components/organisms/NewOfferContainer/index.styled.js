import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

export const StyledWrapper = styled.main`
  margin-top: 4rem;
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-top: 0;
    padding-right: 1rem;
    align-items: flex-start;
  }
`;

export const StyledHeading = styled(Heading)`
  margin: 1rem;
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    margin: 0 0 1rem 0;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 2rem;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    margin: 0 0 1rem 0;
  }
`;
