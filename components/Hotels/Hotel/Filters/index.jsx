import React, { useState } from 'react';
import {
  StyledDiv,
  StyledDivider,
  StyledH3,
  StyledHorizontal,
  StyledSwitch,
  StyledVertical,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledSubtitle,
  StyledSectionContentItemWrapper,
  StyledSlider,
  StyledMarks,
  StyledResetButton,
  StyledWrapper,
} from './style';
import RateComponent from 'components/Common/Rate';
import { ArrowDownOutlined } from '@ant-design/icons';
import Icon from 'components/Icon';

const Title = ({ children }) => (
  <StyledDiv width="auto" zIndex="1">
    <StyledH3 color="gray.15" mb="24px" mt="28px" fontWeight={5} fontSize={5}>
      {children}
    </StyledH3>
  </StyledDiv>
);

const Section = ({ title, children, isTitleComponent }) =>
  !isTitleComponent ? (
    <StyledVertical justifyContent="center">
      <Title>{title}</Title>
      {children}
    </StyledVertical>
  ) : (
    <>
      {title}
      <StyledVertical justifyContent="center">{children}</StyledVertical>
    </>
  );

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

const SectionContent = ({ items }) => (
  <StyledVertical width="100%" justifyContent="center">
    {items?.map((item) => (
      <StyledSectionContentItemWrapper key={item?.key}>
        {item?.startComponent}
        {item?.endComponent}
      </StyledSectionContentItemWrapper>
    ))}
  </StyledVertical>
);

const HotelFilters = () => {
  const [ecoBiz, setEcoBiz] = useState(true);
  const [modern, setModern] = useState(true);
  const [classic, setClassic] = useState(true);
  const [airbnb, setAirbnb] = useState(true);
  const [vilaHouse, setVilaHouse] = useState(true);

  const [fiveStar, setFiveStar] = useState(true);
  const [fourStar, setFourStar] = useState(true);
  const [threeStar, setThreeStar] = useState(true);
  const [twoStar, setTwoStar] = useState(true);
  const [oneStar, setOneStar] = useState(true);

  const [isPriceExpanded, setIsPriceExpanded] = useState(true);

  const hotelTypeComponent = [
    {
      key: 'ecobiz',
      startComponent: <Subtitle>Eco Biz</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setEcoBiz((prevState) => !prevState);
          }}
          checked={ecoBiz}
          bg={ecoBiz && 'blue.10'}
        />
      ),
    },
    {
      key: 'modern',
      startComponent: <Subtitle>Modern</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setModern((prevState) => !prevState);
          }}
          checked={modern}
          bg={modern && 'blue.10'}
        />
      ),
    },
    {
      key: 'classic',
      startComponent: <Subtitle>Classic</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setClassic((prevState) => !prevState);
          }}
          checked={classic}
          bg={classic && 'blue.10'}
        />
      ),
    },
    {
      key: 'airbnb',
      startComponent: <Subtitle>Airbnb</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setAirbnb((prevState) => !prevState);
          }}
          checked={airbnb}
          bg={airbnb && 'blue.10'}
        />
      ),
    },
    {
      key: 'vila_house',
      startComponent: <Subtitle>Vila House</Subtitle>,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setVilaHouse((prevState) => !prevState);
          }}
          checked={vilaHouse}
          bg={vilaHouse && 'blue.10'}
        />
      ),
    },
  ];

  const hotelRateCompnent = [
    {
      startComponent: <RateComponent defaultValue={5} isReadOnly />,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setFiveStar((prevState) => !prevState);
          }}
          checked={fiveStar}
          bg={fiveStar && 'blue.10'}
        />
      ),
    },
    {
      startComponent: <RateComponent defaultValue={4} isReadOnly />,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setFourStar((prevState) => !prevState);
          }}
          checked={fourStar}
          bg={fourStar && 'blue.10'}
        />
      ),
    },
    {
      startComponent: <RateComponent defaultValue={3} isReadOnly />,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setThreeStar((prevState) => !prevState);
          }}
          checked={threeStar}
          bg={threeStar && 'blue.10'}
        />
      ),
    },
    {
      startComponent: <RateComponent defaultValue={2} isReadOnly />,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setTwoStar((prevState) => !prevState);
          }}
          checked={twoStar}
          bg={twoStar && 'blue.10'}
        />
      ),
    },
    {
      startComponent: <RateComponent defaultValue={1} isReadOnly />,
      endComponent: (
        <StyledSwitch
          onChange={() => {
            setOneStar((prevState) => !prevState);
          }}
          checked={oneStar}
          bg={oneStar && 'blue.10'}
        />
      ),
    },
  ];

  const priceMarks = {
    50: (
      <StyledDiv ml={14}>
        <StyledMarks color="blue.10" lineHeight="17px">
          50
        </StyledMarks>
        <StyledMarks color="orange.13" lineHeight="14px" ml={1}>
          $
        </StyledMarks>
      </StyledDiv>
    ),
    800: (
      <StyledDiv mr={20}>
        <StyledMarks color="blue.10" lineHeight="17px" mr={1}>
          800
        </StyledMarks>
        <StyledMarks fontSize={4} color="orange.13" lineHeight="14px">
          $
        </StyledMarks>
      </StyledDiv>
    ),
  };

  const hotelPriceComponent = [
    {
      startComponent: (
        <StyledSlider
          isPriceExpanded={isPriceExpanded}
          marks={priceMarks}
          range
          defaultValue={[50, 800]}
          min={50}
          max={800}
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
            <Icon
              cursor="pointer"
              width="22px"
              height="22px"
              textAlign="center"
              fontSize={4}
              borderRadius="full"
              border={isPriceExpanded ? 'activeCollapse' : 'deactiveCollapse'}
              color={isPriceExpanded ? 'gray.24' : 'gray.22'}
              bg={isPriceExpanded ? '#fff' : 'transparent'}
              mr="12px"
              onClick={() => setIsPriceExpanded((prevState) => !prevState)}
            >
              <ArrowDownOutlined />
            </Icon>
            <Icon
              cursor="pointer"
              width="22px"
              height="22px"
              textAlign="center"
              fontSize={4}
              borderRadius="full"
              border={isPriceExpanded ? 'deactiveCollapse' : 'activeCollapse'}
              color={isPriceExpanded ? 'gray.22' : 'gray.24'}
              bg={isPriceExpanded ? 'transparent' : '#fff'}
              onClick={() => setIsPriceExpanded((prevState) => !prevState)}
            >
              <ArrowDownOutlined rotate={180} />
            </Icon>
          </StyledHorizontal>
        </StyledHorizontal>
      ),
      isTitleComponent: true,
      component: hotelPriceComponent,
    },
    { title: 'Hotel Rate', component: hotelRateCompnent },
    { title: 'Hotel Type', component: hotelTypeComponent, noDivider: true },
  ];

  return (
    <StyledContainer>
      <StyledVertical alignItems="center">
        <StyledResetButton underline>Reset Filters</StyledResetButton>
        <StyledWrapper>
          {sectionData.map((item, index) => (
            <Section
              title={item.title}
              key={`${item}-${index}`}
              isTitleComponent={item?.isTitleComponent}
            >
              <SectionContent items={item.component} />
              {!item?.noDivider && (
                <StyledDivider
                  backgroundColor="gray.22"
                  opacity="0.5"
                  margin="1.5rem 0px"
                  m={'0'}
                />
              )}
            </Section>
          ))}
        </StyledWrapper>
      </StyledVertical>
    </StyledContainer>
  );
};

export default HotelFilters;
