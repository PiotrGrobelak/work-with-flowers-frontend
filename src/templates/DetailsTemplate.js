import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from 'components/organisms/SearchContainer';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({
  about,
  city,
  companyName,
  date,
  description,
  title,
  requirements,
  history,
}) => (
  <UserPageTemplate>
    <SearchContainer />
    <div>
      <Heading>{title}</Heading>
      <Heading>{companyName}</Heading>
      <Paragraph>{about}</Paragraph>
      <Paragraph>{description}</Paragraph>
      <span>{city}</span>
      <span>{date}</span>
      <ul>
        {requirements.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Button onClick={() => history.goBack()}>Wróć</Button>
    </div>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  about: PropTypes.string,
  city: PropTypes.string,
  companyName: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  requirements: PropTypes.arrayOf(PropTypes.string),
};

DetailsTemplate.defaultProps = {
  about: '',
  city: '',
  companyName: '',
  date: '',
  description: '',
  title: '',
  requirements: [],
};

export default DetailsTemplate;
