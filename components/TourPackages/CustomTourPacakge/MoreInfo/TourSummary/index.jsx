import { useSelector } from 'react-redux';
import {
  StyledDivider,
  StyledH4,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { CheckOutlined } from '@ant-design/icons';
import { tourSummaryRowTitles } from 'utils/tourPackage.utils';
import {
  StyledCircle,
  StyledContainer,
  StyledRowContainer,
  StyledTitleContainer,
} from './style';

const TourSummary = () => {
  const tourPackageStoreState = useSelector(
    (state) => state?.customTourPackage,
  );

  const RowComponent = ({ selected, title, value }) => (
    <StyledRowContainer>
      <StyledTitleContainer>
        <StyledCircle selected={selected}>
          {/* fontSize is too small to use rem as it's value */}
          <Icon color={selected ? 'green.7' : 'gray.22'} fontSize="8px">
            <CheckOutlined />
          </Icon>
        </StyledCircle>
        <StyledSpan mt="-1px">{title}</StyledSpan>
      </StyledTitleContainer>
      {value}
    </StyledRowContainer>
  );

  //Configure length of the trip based on chosen time
  const configureTripLength = (data) => {
    switch (data) {
      case 'approximate':
        if (tourPackageStoreState.preferredDuration) {
          return `${tourPackageStoreState.preferredDuration} Days`;
        }
      case 'exact':
        if (tourPackageStoreState.startDate && tourPackageStoreState.endDate) {
          const diffTime = Math.abs(
            new Date(tourPackageStoreState.endDate) -
              new Date(tourPackageStoreState.startDate),
          );
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return `${diffDays} Days`;
        }
      case 'decide-later':
        if (tourPackageStoreState.approximateDuration) {
          return `${tourPackageStoreState.approximateDuration} Days`;
        }
    }
  };

  //a better way to get type of a variable
  const toType = (obj) => {
    return {}.toString
      .call(obj)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  };

  // Configure value for TourSummary titles
  const configureValue = (key) => {
    if (tourPackageStoreState[key] !== null) {
      switch (key) {
        case 'timeType':
          return configureTripLength(tourPackageStoreState[key]);
        case 'activities':
          return tourPackageStoreState[key].length !== 0 && 'Done';
        case 'selectedSearchResult':
          return (
            tourPackageStoreState[key].length !== 0 &&
            tourPackageStoreState[key].length
          );
        case 'selectedAttractions':
          return (
            tourPackageStoreState[key].length !== 0 &&
            tourPackageStoreState[key].length
          );
        case 'lodgings':
          return tourPackageStoreState[key].map((data) => (
            <StyledSpan textAlign="right">{data}</StyledSpan>
          ));
        default:
          return tourPackageStoreState[key];
      }
    }
  };

  return (
    <StyledVertical alignItems="center">
      <StyledContainer>
        <StyledH4 mt="16px" mb="16px" textAlign="center">
          My Tour Summary
        </StyledH4>
        <StyledDivider mt="0px" mb="0px" border="footer" opacity="40%" />
        <StyledVertical mt="16px">
          {tourSummaryRowTitles.map(({ title, key, value }) => (
            <RowComponent
              key={key}
              selected={
                tourPackageStoreState[key]
                  ? toType(tourPackageStoreState[key]) == 'array'
                    ? tourPackageStoreState[key].length !== 0
                      ? true
                      : false
                    : !!tourPackageStoreState[key]
                  : false
              }
              title={title}
              value={
                <StyledVertical justifyContent="flex-end" mt="-3px">
                  {configureValue(key)}
                </StyledVertical>
              }
            />
          ))}
        </StyledVertical>
      </StyledContainer>
      <StyledH4
        textDecoration="underline"
        textAlign="center"
        mt={24}
        color="blue.10"
        fontWeight={6}
        letterSpacing="0.05em"
      >
        TourPackage-Request Policy
      </StyledH4>
    </StyledVertical>
  );
};

export default TourSummary;
