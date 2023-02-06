import { StyledBlock } from './style';
import { footerInfo } from 'utils/tourPackage.utils.js';
import {
  StyledRow,
  StyledCol,
  StyledText,
} from 'components/Common/commonStyles';

export default function TourFooter() {
  return (
    <StyledRow mt={8}>
      {footerInfo.map(({ id, title1, title2, svg }) => (
        <StyledCol span={6} key={id} justifyContent="center">
          <StyledBlock>
            <img src={svg} alt="logo" />
            <StyledText
              textAlign="center"
              color="gray.15"
              fontSize={4}
              fontWeight={6}
              mt="22px"
            >
              {title1}
            </StyledText>
            <StyledText
              textAlign="center"
              color="gray.27"
              fontSize={2}
              fontWeight={5}
              mt="20px"
            >
              {title2}
            </StyledText>
          </StyledBlock>
        </StyledCol>
      ))}
    </StyledRow>
  );
}
