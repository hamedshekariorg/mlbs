import React from 'react';
import { StyledDiv, StyledImg, StyledH3 } from 'components/Common/commonStyles';
import flightLoadingLogo from 'public/static/images/flightLoadingLogo.svg';
import flightLoadingCircle from 'public/static/images/flightLoadingCircle.svg';
import flightLoadingPlane from 'public/static/images/flightLoadingPlane.svg';
import { StyledLoadingBarWrapper, StyledText } from './styles';
import { useTheme } from '@emotion/react';
const LoadingModalContent = () => {
  const theme = useTheme();
  return (
    <StyledDiv
      width="100%"
      height="100%"
      backgroundImage="url('/static/images/flightLoadingBg.svg')"
      display="flex"
    >
      <StyledDiv flex={1.2} position="relative">
        <StyledDiv
          ml={4}
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledDiv
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            position="absolute"
            right="20px"
          >
            <StyledDiv
              width="44px"
              height="44px"
              borderRadius={'full'}
              position="absolute"
              top="-45px"
            />
            <StyledDiv
              width="44px"
              height="44px"
              borderRadius={'full'}
              position="absolute"
              bottom="-45px"
            />
          </StyledDiv>
          <StyledH3
            textAlign="center"
            fontWeight={5}
            fontSize={7}
            color="gray.15"
            lineHeight="45px"
          >
            Charming Persian is looking for <br /> best flights from
            <br /> <StyledText color="red.3">Tehran</StyledText> to
            <StyledText color="red.3"> Mashhad</StyledText> <br />
            Please Wait...
          </StyledH3>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv
        flex={0.9}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <StyledLoadingBarWrapper
          display="flex"
          justifyContent="center"
          alignItems="center"
          pb={4}
        >
          <StyledImg
            src={flightLoadingLogo}
            width={144}
            height={134}
            position="absolute"
            alt="airline"
          />
          <StyledImg
            className="loading_circle"
            src={flightLoadingCircle}
            position="absolute"
            alt="loading-logo"
          />
          <StyledImg
            className="loading_plane"
            src={flightLoadingPlane}
            position="absolute"
            alt="loading-logo"
          />
        </StyledLoadingBarWrapper>
      </StyledDiv>
    </StyledDiv>
  );
};

export default LoadingModalContent;
