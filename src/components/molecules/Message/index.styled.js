import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';

export const StyledMessage = styled(Paragraph)`
  max-width: 30rem;
  margin: 0;
  font-size: ${({ theme, big }) =>
    big ? theme.fontSizes.sm : theme.fontSizes.xxs};
  color: ${({ theme, error }) =>
    error ? theme.colors.primaryRed : theme.colors.primaryGreen};
  letter-spacing: 0.7px;
`;
