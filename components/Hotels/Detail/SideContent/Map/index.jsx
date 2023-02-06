import {
  StyledContainer,
  StyledMapContainer,
  StyledChipContainer,
  StyledChip,
  StyledButtonsContainer,
  StyledButton,
} from './style';
import map from 'public/static/images/hotel/map.png';
import pin from 'public/static/images/hotel/pin.svg';
import location from 'public/static/images/hotel/location.svg';
import {
  StyledDivider,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';
import { mapChips } from 'utils/hotel.utils';
import {
  MinusCircleFilled,
  MinusOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from '@ant-design/icons';
const Map = () => {
  return (
    <StyledContainer>
      <StyledMapContainer src={map}>
        <StyledImg src={pin} position="absolute" top="35%" left="43%" />
        <StyledChipContainer>
          {mapChips.map(({ id, src }, index) => (
            <StyledChip key={id} mb={index !== 2 && '10px'}>
              <StyledImg src={src} width="100%" height="15px" />
            </StyledChip>
          ))}
        </StyledChipContainer>
        <StyledButtonsContainer>
          <StyledButton>
            <StyledImg src={location} />
          </StyledButton>
          <StyledVertical
            width="30px"
            height="53px"
            bg="#fff"
            justifyContent="center"
          >
            <PlusOutlined />
            <StyledDivider m={2} />
            <MinusOutlined />
          </StyledVertical>
        </StyledButtonsContainer>
      </StyledMapContainer>
    </StyledContainer>
  );
};

export default Map;
