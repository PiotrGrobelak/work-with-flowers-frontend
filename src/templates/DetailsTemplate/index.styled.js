import styled from 'styled-components';
import { iconBeforeElement, scrollBar } from 'theme/mixins';
import Paragraph from 'components/atoms/Paragraph';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

export const StyledInnerWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  height: calc(100vh - 11.3rem);
  max-width: 80rem;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  overflow-y: scroll;
  ${scrollBar};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem;
    height: calc(100vh - 13.3rem);
  }
`;

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  margin-bottom: 8rem;
  padding: 0 3rem;
  height: 100%;
  max-height: 25rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  border-radius: 5px;
`;

export const StyledLogo = styled.img`
  margin-right: 3rem;
  padding: 0.5rem;
  height: 6rem;
  width: 6rem;
  border: 4px solid ${({ theme }) => theme.colors.secondaryBlue};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    height: 8rem;
    width: 8rem;
  }
`;

export const StyledCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInfoWrapper = styled.div`
  position: absolute;
  top: 75%;
  left: 0%;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    top: 85%;
  }
`;

export const StyledInfo = styled.span`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
  min-width: 16rem;
  max-width: 24rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  ${iconBeforeElement}
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  height: 14rem;
  width: 14rem;
  right: 0%;
  bottom: 10%;
  object-fit: contain;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    height: 100%;
    max-height: 30rem;
    width: 100%;
    max-width: 30rem;
    bottom: 0%;
  }
`;

export const StyledSection = styled.section`
  margin: 2rem 0;
  padding: 1rem;
  min-height: ${({ contact }) => (contact ? '180px' : '300px')};
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  border-radius: 5px;
  border-left: 6px solid ${({ theme }) => theme.colors.secondaryBlue};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem 4rem;
    border-left: 13px solid ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const StyledListItem = styled.li`
  margin: 1rem 0;
  ${iconBeforeElement}
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  height: 10rem;
  justify-content: space-around;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    height: 14rem;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 0 4rem;
  }
`;
