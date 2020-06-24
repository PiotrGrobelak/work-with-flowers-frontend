import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchContainer from 'components/organisms/SearchContainer';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import translateType from 'utils/translateType';
import { iconBeforeElement, scrollBar } from 'theme/mixins';
import ComapnyLogoIcon from 'assets/icons/CompanyLogo.svg';
import PlaceIcon from 'assets/icons/Place.svg';
import MapIcon from 'assets/icons/Map.svg';
import TimeIcon from 'assets/icons/Time.svg';
import CheckCircleIcon from 'assets/icons/CheckCircle.svg';
import FirstTemplateImage from 'assets/image/coolness.svg';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const StyledInnerWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  height: calc(100vh - 133px);
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  overflow-y: scroll;
  ${scrollBar};
`;

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  margin-bottom: 8rem;
  padding: 0 3rem;
  height: 100%;
  max-height: 250px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  border-radius: 5px;
`;

const StyledLogo = styled.img`
  margin-right: 3rem;
  padding: 0.5rem;
  height: 80px;
  width: 80px;
  border: 4px solid ${({ theme }) => theme.colors.secondaryBlue};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
`;

const StyledCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInfoWrapper = styled.div`
  position: absolute;
  top: 85%;
  left: 0%;
  z-index: 1;
`;

const StyledInfo = styled.span`
  display: inline-block;
  margin: 0.5rem;
  padding: 1rem;
  min-width: 160px;
  max-width: 240px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  ${iconBeforeElement}
`;

const StyledImage = styled.img`
  position: absolute;
  right: 0%;
  bottom: 0%;
  max-height: 300px;
  height: 100%;
  max-width: 300px;
  width: 100%;
  object-fit: contain;
`;

const StyledSection = styled.section`
  margin: 2rem 0;
  padding: 1rem 4rem;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  border-radius: 5px;
  border-left: 13px solid ${({ theme }) => theme.colors.secondaryBlue};
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin: 1rem 0;
  ${iconBeforeElement}
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  height: 140px;
  justify-content: space-around;
  align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const DetailsTemplate = ({
  about,
  city,
  companyName,
  date,
  description,
  title,
  requirements,
  adress,
  type,
  history,
}) => (
  <UserPageTemplate>
    <SearchContainer />
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledHeader>
          <Heading as="h2">{translateType(type)}</Heading>
          <StyledCompanyWrapper>
            <StyledLogo src={ComapnyLogoIcon} />
            <Paragraph>{companyName}</Paragraph>
          </StyledCompanyWrapper>
          <StyledInfoWrapper>
            <StyledInfo icon={PlaceIcon} height={24} width={24}>
              {city}
            </StyledInfo>
            <StyledInfo icon={MapIcon} height={24} width={24}>
              {adress}
            </StyledInfo>
            <StyledInfo icon={TimeIcon} height={24} width={24}>
              Dadano: {date}
            </StyledInfo>
          </StyledInfoWrapper>
          <StyledImage src={FirstTemplateImage} />
        </StyledHeader>
        <StyledSection>
          <Heading as="h4">Kim jesteśmy</Heading>
          <Paragraph>{about}</Paragraph>
        </StyledSection>
        <StyledSection>
          <Heading as="h4">{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </StyledSection>
        <StyledSection>
          <Heading as="h4">Oczekiwania</Heading>
          <StyledList>
            {requirements.map((item) => {
              return (
                <StyledListItem
                  icon={CheckCircleIcon}
                  height={16}
                  width={16}
                  key={item}
                >
                  {item}
                </StyledListItem>
              );
            })}
          </StyledList>
        </StyledSection>
        <StyledParagraph>
          Wyrażam zgodę na przetwarzanie przez ogłoszeniodawcę moich danych
          osobowych, zawartych w mojej ofercie pracy, dla potrzeb niezbędnych do
          realizacji procesu rekrutacji zgodnie z ustawą z dnia 29 sierpnia 1997
          r. o ochronie danych osobowych (t.j. Dz. U. z 2016 r., poz. 922).
          Jednocześnie wyrażam zgodę na przetwarzanie przez ogłoszeniodawcę
          moich danych osobowych na potrzeby przyszłych rekrutacji.
        </StyledParagraph>
        <StyledButtonsWrapper>
          <Button onClick={() => history.goBack()}>Wróć</Button>
          <Button>Aplikuj</Button>
        </StyledButtonsWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  about: PropTypes.string,
  city: PropTypes.string,
  adress: PropTypes.string,
  companyName: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string),
};

DetailsTemplate.defaultProps = {
  about: '',
  city: '',
  adress: '',
  companyName: '',
  date: '',
  description: '',
  title: '',
  type: '',
  requirements: [],
};

export default DetailsTemplate;
