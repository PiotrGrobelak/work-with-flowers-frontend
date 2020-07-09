import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from 'components/organisms/SearchContainer';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';
import translateType from 'utils/translateType';
import ComapnyLogoIcon from 'assets/icons/CompanyLogo.svg';
import PlaceIcon from 'assets/icons/Place.svg';
import MapIcon from 'assets/icons/Map.svg';
import TimeIcon from 'assets/icons/Time.svg';
import CheckCircleIcon from 'assets/icons/CheckCircle.svg';
import FirstTemplateImage from 'assets/image/coolness.svg';
import UserPageTemplate from '../UserPageTemplate';

import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledHeader,
  StyledLogo,
  StyledCompanyWrapper,
  StyledInfoWrapper,
  StyledInfo,
  StyledImage,
  StyledSection,
  StyledList,
  StyledListItem,
  StyledButtonsWrapper,
  StyledParagraph,
} from './index.styled';

const DetailsTemplate = ({
  about,
  city,
  companyName,
  date,
  description,
  title,
  requirements,
  adress,
  email,
  type,
  history,
  clearCurrentOffer,
}) => (
  <UserPageTemplate>
    <SearchContainer />
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledHeader>
          <Heading as="h2">{translateType(type)}</Heading>
          <StyledCompanyWrapper>
            <StyledLogo src={ComapnyLogoIcon} alt="Logo firmy" />
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
          <StyledImage src={FirstTemplateImage} alt="Zdjęcie z ofertą pracy" />
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
        <StyledSection contact>
          <Heading as="h4">Kontakt</Heading>
          <Paragraph>O kontakt, wraz z CV prosimy drogą mailową.</Paragraph>
          <address>
            E-mail: <Link href={`mailto:${email}`}>{email}</Link>
          </address>
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
          <Button
            onClick={() => {
              history.goBack();
              clearCurrentOffer();
            }}
          >
            Wróć
          </Button>
          <Button>
            <Link whiteText href={`mailto:${email}`}>
              Aplikuj
            </Link>
          </Button>
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
  email: PropTypes.string,
  companyName: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string),
  clearCurrentOffer: PropTypes.func.isRequired,
};

DetailsTemplate.defaultProps = {
  about: '',
  city: '',
  adress: '',
  email: '',
  companyName: '',
  date: '',
  description: '',
  title: '',
  type: '',
  requirements: [],
};

export default DetailsTemplate;
