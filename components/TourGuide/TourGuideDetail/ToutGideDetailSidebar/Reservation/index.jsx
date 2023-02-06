import { useState } from 'react';
import DatePicker from 'components/Common/DatePicker';
import { StyledContainer } from './style';
import {
  StyledDiv,
  StyledSpan,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';
import Select from 'components/TourGuide/TourGuideDetail/ToutGideDetailSidebar/Select';
import { temporaryOptionReservation } from 'utils/tourGuide.utils';

const Reservation = () => {
  const [favorite, SetFavorite] = useState(false);

  return (
    <StyledContainer>
      <StyledHorizontal
        justifyContent="space-between"
        alignItems="center"
        mb="24px"
      >
        <StyledSpan
          fontWeight={5}
          fontSize={8}
          lineHeight="22px"
          color="blue.10"
        >
          ¥146.99
        </StyledSpan>
        <StyledDiv
          cursor="pointer"
          fontSize={12}
          color="red.3"
          onClick={() => SetFavorite((prevState) => !prevState)}
        >
          {favorite ? <HeartFilled /> : <HeartOutlined />}
        </StyledDiv>
      </StyledHorizontal>
      <DatePicker placeholder="Reservation Date">
        <StyledHorizontal justifyContent="flex-end">
          <Button btnType="secondary" mt="20px" px={6}>
            Apply
          </Button>
        </StyledHorizontal>
      </DatePicker>
      <Select
        mt="20px"
        defaultValue="Exelent Profil"
        options={temporaryOptionReservation}
      />
      <Button type="secondary" width="100%" mt="24px">
        Reserve Now
      </Button>
    </StyledContainer>
  );
};

export default Reservation;
