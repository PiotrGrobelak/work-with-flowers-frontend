import React from 'react';
import WorkingView from 'components/organisms/WorkingView';

const greetings = 'Witaj w panelu pracodwacy';

const EmployerPage = () => (
  <>
    <WorkingView greetings={greetings} />
  </>
);

export default EmployerPage;
