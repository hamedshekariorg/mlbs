import { Tabs } from 'antd';
import { StyledDiv, StyledParagraph } from 'components/Common/commonStyles';
import { StyledContainer, StyledTabs } from './style';
import { TourPackagesTabs } from 'utils/attraction.utils';
import Button from 'components/Common/Button';
import Icon from 'components/Icon';
import TourPackagesCarousel from 'components/Common/Carousel/TourPackagesCarousel';
import RateComponent from 'components/Common/Rate';
const { TabPane } = Tabs;

const TourPackages = () => {
  return (
    <StyledDiv>
      <StyledContainer>
        <StyledTabs defaultActiveKey={0} type="card">
          {TourPackagesTabs.map((item) => (
            <TabPane tab={item.title} key={item.id}>
              <TourPackagesCarousel images={item.images} />
              <StyledDiv p={5} color="#fff">
                <StyledDiv display="flex" justifyContent="space-between">
                  <StyledParagraph color="#fff">{item.name}</StyledParagraph>
                  <RateComponent defaultValue={4} />
                </StyledDiv>
                <StyledParagraph color="#fff">
                  special TourGuide
                </StyledParagraph>
                <ul>
                  {item.specialTourGuide.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <StyledDiv mt={5}>
                  <ul className="list">
                    <li>
                      <Icon
                        name="icon-call-2"
                        fontSize={10}
                        color={'gray.36'}
                        mr={2}
                      />
                      {item.phone}
                    </li>
                    <li>
                      <Icon
                        name="icon-mail"
                        fontSize={10}
                        color={'gray.36'}
                        mr={2}
                      />
                      {item.email}
                    </li>
                  </ul>
                </StyledDiv>
                <StyledDiv mt={6} px={8} textAlign="center">
                  <Button btnType="white" borderRadius={10} block>
                    Contact
                  </Button>
                </StyledDiv>
              </StyledDiv>
            </TabPane>
          ))}
        </StyledTabs>
      </StyledContainer>
    </StyledDiv>
  );
};

export default TourPackages;
