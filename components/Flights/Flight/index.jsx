import React, { useEffect, useState } from 'react';

import HeaderCard from './HeaderCard';
import MainContent from './MainContent';

import { StyledContainer, StyledMainWrapper } from './style';
import DateCards from './MainContent/DateCard/Scrollbar';
import { StyledDiv } from 'components/Common/commonStyles';
import { StyledModal } from 'components/Common/Modal/style';
import LoadingModalContent from './LoadingModal';

const FlightList = () => {
  const [loading, setLoading] = useState(false);
  const [isLoadingModalVisible, setIsLoadingModalVisible] = useState(true);

  useEffect(() => {
    !loading && setIsLoadingModalVisible(false);
  }, [loading]);

  return (
    <StyledContainer>
      <HeaderCard />
      <StyledDiv width="100%" mb={32}>
        <DateCards />
      </StyledDiv>
      <StyledMainWrapper>
        <MainContent />
      </StyledMainWrapper>
      {loading && (
        <StyledModal
          closeIcon={<></>}
          width={721}
          bodyStyle={{
            height: '295px',
          }}
          footer={false}
          centered
          visible={isLoadingModalVisible}
        >
          <LoadingModalContent />
        </StyledModal>
      )}
    </StyledContainer>
  );
};

export default FlightList;
