import React, { useState } from 'react';
import {
  StyledDiv,
  StyledDivider,
  StyledImg,
  StyledH3,
  StyledSwitch,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import {
  StyledSubtitle,
  StyledSectionContentItemWrapper,
  StyledSlider,
  StyledMarks,
  StyledResetButton,
  StyledWrapper,
} from './style';
import mahanAir from 'public/static/images/mahanAir.svg';
import Icon from 'components/Icon';

const Title = ({ children }) => (
  <StyledDiv width="auto">
    <StyledH3 color="gray.15" mb="24px" mt="28px" fontSize={5}>
      {children}
    </StyledH3>
  </StyledDiv>
);

const Section = ({ title, children, isTitleComponent }) =>
  !isTitleComponent ? (
    <StyledVertical justifyContent="center" alignItems="flex-start">
      <Title>{title}</Title>
      {children}
    </StyledVertical>
  ) : (
    <>
      {title} <StyledVertical justifyContent="center">{children}</StyledVertical>
    </>
  );

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

const SectionContent = ({ items }) => (
  <StyledVertical width="100%" justifyContent="center">
    {items?.map(({ key, startComponent, endComponent }) => (
      <StyledSectionContentItemWrapper key={key}>
        {startComponent}
        {endComponent}
      </StyledSectionContentItemWrapper>
    ))}
  </StyledVertical>
);

const Filter = () => {
  const [economy, setEconomy] = useState(true);
  const [business, setBusiness] = useState(true);
  const [firstClass, setFirstClass] = useState(true);

  const [system, setSystem] = useState(true);
  const [charter, setCharter] = useState(true);

  const [mahan, setMahan] = useState(true);
  const [iran, setIran] = useState(true);
  const [gheshm, setGheshm] = useState(true);
  const [turkish, setTurkish] = useState(true);
  const [aseman, setAseman] = useState(true);

  const [iranTech, setIranTech] = useState(true);
  const [snapp, setSnapp] = useState(true);
  const [alibaba, setAlibaba] = useState(true);
  const [adlafarin, setAdlAfarin] = useState(true);
  const [travia, setTravia] = useState(true);

  const [isPricePanelActive, setIsPricePanelActive] = useState(true);
  const [isTimePanelActive, setIsTimePanelActive] = useState(true);

  const [timeRange, setTimeRange] = useState([0, 24]);
  const [priceRange, setPriceRange] = useState([50, 800]);

  const classFlightListComponent = [
    {
      key: 'economy',
      startComponent: <Subtitle>Economy</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setEconomy((prevState) => !prevState);
          }}
          checked={economy}
          bg={economy && 'blue.10'}
        />
      ),
    },
    {
      key: 'business',
      startComponent: <Subtitle>Business</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setBusiness((prevState) => !prevState);
          }}
          checked={business}
          bg={business && 'blue.10'}
        />
      ),
    },
    {
      key: 'firstClass',
      startComponent: <Subtitle>First Class</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setFirstClass((prevState) => !prevState);
          }}
          checked={firstClass}
          bg={firstClass && 'blue.10'}
        />
      ),
    },
  ];

  const categoryListComponent = [
    {
      key: 'system',
      startComponent: <Subtitle>System</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setSystem((prevState) => !prevState);
          }}
          checked={system}
          bg={system && 'blue.10'}
        />
      ),
    },
    {
      key: 'charter',
      startComponent: <Subtitle>Charter</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setCharter((prevState) => !prevState);
          }}
          checked={charter}
          bg={charter && 'blue.10'}
        />
      ),
    },
  ];

  const airlineListComponent = [
    {
      key: 'mahanAir',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="mahan-air" />
          <Subtitle>Mahan Air</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setMahan((prevState) => !prevState);
          }}
          checked={mahan}
          bg={mahan && 'blue.10'}
        />
      ),
    },
    {
      key: 'iranAir',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="iran-air" />
          <Subtitle>Iran Air</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setIran((prevState) => !prevState);
          }}
          checked={iran}
          bg={iran && 'blue.10'}
        />
      ),
    },
    {
      key: 'gheshmAir',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="gheshm-air" />
          <Subtitle>Gheshm Air</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setGheshm((prevState) => !prevState);
          }}
          checked={gheshm}
          bg={gheshm && 'blue.10'}
        />
      ),
    },
    {
      key: 'turkishAir',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="turkish-air" />
          <Subtitle>Turkish Air</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setTurkish((prevState) => !prevState);
          }}
          checked={turkish}
          bg={turkish && 'blue.10'}
        />
      ),
    },
    {
      key: 'asemanAir',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="aseman-air" />
          <Subtitle>Aseman Air</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setAseman((prevState) => !prevState);
          }}
          checked={aseman}
          bg={aseman && 'blue.10'}
        />
      ),
    },
    {
      startComponent: (
        <StyledH3 color="blue.10" fontSize={4}>
          Show more...
        </StyledH3>
      ),
    },
  ];

  const providersListComponent = [
    {
      key: 'iranTech',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="iran-tech" />
          <Subtitle>Iran Tech</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setIranTech((prevState) => !prevState);
          }}
          checked={iranTech}
          bg={iranTech && 'blue.10'}
        />
      ),
    },
    {
      key: 'snapp',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="snapp" />
          <Subtitle>Snapp</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setSnapp((prevState) => !prevState);
          }}
          checked={snapp}
          bg={snapp && 'blue.10'}
        />
      ),
    },
    {
      key: 'alibaba',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="alibaba" />
          <Subtitle>Alibaba</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setAlibaba((prevState) => !prevState);
          }}
          checked={alibaba}
          bg={alibaba && 'blue.10'}
        />
      ),
    },
    {
      key: 'adlAfarin',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="adlafarin" />
          <Subtitle>Adlafarin</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setAdlAfarin((prevState) => !prevState);
          }}
          checked={adlafarin}
          bg={adlafarin && 'blue.10'}
        />
      ),
    },
    {
      key: 'travia',
      startComponent: (
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledImg src={mahanAir} mb="3px" mr="8px" alt="travia" />
          <Subtitle>Travia</Subtitle>
        </StyledHorizontal>
      ),
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setTravia((prevState) => !prevState);
          }}
          checked={travia}
          bg={travia && 'blue.10'}
        />
      ),
    },
    {
      startComponent: (
        <StyledH3 color="blue.10" fontSize={4}>
          Show more...
        </StyledH3>
      ),
    },
  ];

  const priceMarks = {
    50: (
      <StyledDiv ml="14px">
        <StyledMarks color="blue.10" lineHeight="17px">
          {priceRange[0]}
        </StyledMarks>
        <StyledMarks color="orange.13" lineHeight="14px" ml={1}>
          $
        </StyledMarks>
      </StyledDiv>
    ),
    800: (
      <StyledDiv mr="20px">
        <StyledMarks color="blue.10" lineHeight="17px" mr={1}>
          {priceRange[1]}
        </StyledMarks>
        <StyledMarks fontSize={4} color="orange.13" lineHeight="14px">
          $
        </StyledMarks>
      </StyledDiv>
    ),
  };

  const flightPriceComponent = [
    {
      key: 'flightPrice',
      startComponent: (
        <StyledSlider
          onChange={(prices) => setPriceRange(prices)}
          tooltipVisible={false}
          isPanelExpanded={isPricePanelActive}
          marks={priceMarks}
          range
          defaultValue={[50, 800]}
          min={50}
          max={800}
        />
      ),
    },
  ];

  const timeMarks = {
    0: (
      <StyledDiv ml={24}>
        <StyledMarks color="blue.10" lineHeight="17px">
          {timeRange[0] < 10 && '0'}
          {timeRange[0]}:00
        </StyledMarks>
      </StyledDiv>
    ),
    24: (
      <StyledDiv mr="20px">
        <StyledMarks color="blue.10" lineHeight="17px">
          {timeRange[1] < 10 && '0'}
          {timeRange[1]}:00
        </StyledMarks>
      </StyledDiv>
    ),
  };

  const fligtTimeComponent = [
    {
      key: 'flightTime',
      startComponent: (
        <StyledSlider
          onChange={(times) => setTimeRange(times)}
          tooltipVisible={false}
          isPanelExpanded={isTimePanelActive}
          marks={timeMarks}
          range
          defaultValue={[0, 24]}
          min={0}
          max={24}
        />
      ),
    },
  ];

  const sectionData = [
    {
      title: (
        <StyledHorizontal justifyContent="space-between" alignItems="center">
          <Title>Price</Title>
          <StyledHorizontal justifyContent="flex-end" maxWidth="100%">
            <StyledDiv
              width="24px"
              height="24px"
              textAlign="center"
              borderRadius="full"
              border={
                isPricePanelActive ? 'activeCollapse' : 'deactiveCollapse'
              }
              color={isPricePanelActive ? 'gray.24' : 'gray.22'}
              bg={isPricePanelActive ? '#fff' : 'transparent'}
              onClick={() => setIsPricePanelActive(true)}
              mr="12px"
            >
              <Icon name="icon-arrow-down" cursor="pointer" fontSize={8} />
            </StyledDiv>
            <StyledDiv
              width="24px"
              height="24px"
              textAlign="center"
              borderRadius="full"
              border={
                isPricePanelActive ? 'deactiveCollapse' : 'activeCollapse'
              }
              color={isPricePanelActive ? 'gray.22' : 'gray.24'}
              bg={isPricePanelActive ? 'transparent' : '#fff'}
              onClick={() => setIsPricePanelActive(false)}
            >
              <Icon name="icon-arrow-up" cursor="pointer" fontSize={8} />
            </StyledDiv>
          </StyledHorizontal>
        </StyledHorizontal>
      ),
      isTitleComponent: true,
      component: flightPriceComponent,
    },
    {
      title: (
        <StyledHorizontal justifyContent="space-between" alignItems="center">
          <Title>Time</Title>
          <StyledHorizontal justifyContent="flex-end" maxWidth="100%">
            <StyledDiv
              width="24px"
              height="24px"
              textAlign="center"
              borderRadius="full"
              border={isTimePanelActive ? 'activeCollapse' : 'deactiveCollapse'}
              color={isTimePanelActive ? 'gray.24' : 'gray.22'}
              bg={isTimePanelActive ? '#fff' : 'transparent'}
              onClick={() => setIsTimePanelActive(true)}
              mr="12px"
            >
              <Icon name="icon-arrow-down" cursor="pointer" fontSize={8} />
            </StyledDiv>
            <StyledDiv
              width="24px"
              height="24px"
              textAlign="center"
              borderRadius="full"
              border={isTimePanelActive ? 'deactiveCollapse' : 'activeCollapse'}
              color={isTimePanelActive ? 'gray.22' : 'gray.24'}
              bg={isTimePanelActive ? 'transparent' : '#fff'}
              onClick={() => setIsTimePanelActive(false)}
            >
              <Icon name="icon-arrow-up" cursor="pointer" fontSize={8} />
            </StyledDiv>
          </StyledHorizontal>
        </StyledHorizontal>
      ),
      isTitleComponent: true,
      component: fligtTimeComponent,
    },
    { title: 'Class Flight', component: classFlightListComponent },
    { title: 'Category', component: categoryListComponent },
    { title: 'Airline', component: airlineListComponent },
    { title: 'Providers', component: providersListComponent, noDivider: true },
  ];

  return (
    <StyledVertical alignItems="center" mb="105px">
      <StyledVertical alignItems="space-between">
        <StyledResetButton underline>Reset Filters</StyledResetButton>
        <StyledWrapper>
          {sectionData.map(
            ({ title, isTitleComponent, component, noDivider }) => (
              <Section
                title={title}
                key={title}
                isTitleComponent={isTitleComponent}
              >
                <SectionContent items={component} />
                {!noDivider && (
                  <StyledDivider
                    backgroundColor="gray.22"
                    opacity="0.3"
                    m="4px 0px 0px 0px"
                  />
                )}
              </Section>
            ),
          )}
        </StyledWrapper>
      </StyledVertical>
    </StyledVertical>
  );
};

export default Filter;
