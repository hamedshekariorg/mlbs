import { Tabs } from 'antd';
import {
  StyledContainer,
  StyledImgBlock,
  StyledPlayerBlock,
  StyledSlider,
} from './style';
import Calendar from 'components/Common/Calendar';
import {
  StyledText,
  StyledImg,
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
  StyledTypography,
  StyledDivider,
} from 'components/Common/commonStyles';
import RateComponent from 'components/Common/Rate';

const { TabPane } = Tabs;

export default function Agenda() {
  return (
    <StyledContainer>
      <Tabs defaultActiveKey="2">
        <TabPane tab="Corrent Date" key="1">
          {/* TODO:will handle dynamically */}
          <StyledDiv py="3px">
            <Calendar placeholder="test" />
          </StyledDiv>
        </TabPane>
        <TabPane tab="Wish Date" key="2">
          <StyledDiv
            justifyContent="center"
            alignItems="center"
            p="28px 33px 24px"
          >
            <StyledHorizontal
              width="229px"
              height="89px"
              mb="32px"
              justifyContent="space-between"
              alignItems="center"
            >
              <StyledHorizontal>
                <StyledImgBlock>
                  <StyledImg src="/static/images/tourGuide/luiza.svg" />
                </StyledImgBlock>
                <StyledVertical justifyContent="center" ml="5px">
                  <StyledText
                    fontWeight={6}
                    fontSize="9px"
                    lineHeight="11px"
                    color="gray.15"
                  >
                    Luiza L.Alves
                  </StyledText>
                  <StyledVertical height="17px" justifyContent="center">
                    <RateComponent
                      showRateNum={true}
                      rate2="4.6"
                      fontSize={5}
                    />
                  </StyledVertical>
                </StyledVertical>
              </StyledHorizontal>
              <StyledPlayerBlock>
                <StyledImg src="/static/images/delete/player.svg" />
              </StyledPlayerBlock>
            </StyledHorizontal>
            <StyledSlider defaultValue={[1, 100]} styledHandler={true} />
            <StyledDivider bg="gray.52" mt="32px" />
            <StyledTypography
              color="gray.52"
              fontWeight={5}
              fontSize={5}
              lineHeight="24px"
            >
              Charming Persian intends to provide individual and group travel to
              leisure clients. Charming Persian seeks to differentiate itself as
            </StyledTypography>
          </StyledDiv>
        </TabPane>
      </Tabs>
    </StyledContainer>
  );
}
