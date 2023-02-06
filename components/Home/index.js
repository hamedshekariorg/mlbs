import React from 'react';
import { StyledText } from './style';

import { useTranslation, Trans } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();

  return (
    <StyledText mt={'50px'} padding={10}>
      Hello world.
      <h2>Change Language Sample:</h2>
      <hr />
      <Trans i18nKey="test1" />
      <br />
      {t('test2')}
    </StyledText>
  );
};

export default Home;
