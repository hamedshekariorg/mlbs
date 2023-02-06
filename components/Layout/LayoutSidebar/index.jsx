import React, { useState } from 'react';
import {
  StyledSidebarContainer,
  StyledFirstDiv,
  StyledLastDiv,
  StyledImgWrapper,
  StyledOrangeBlock,
  StyledHiddenSetting,
  StyledItems,
} from './style';
import { StyledDiv, StyledText, StyledA } from 'components/Common/commonStyles';
import { svgs } from 'utils/layout.utils';
import Icon from 'components/Icon';
import { useSelector } from 'react-redux';

export default function LayoutSidebar() {
  const [showStatus, setShowStatus] = useState(true);
  const { tourList } = useSelector((state) => state.tourPackage);

  return (
    <StyledDiv position="absolute" height="100%">
      <StyledSidebarContainer>
        <StyledDiv>
          <StyledFirstDiv showStatus={showStatus}>
            <StyledText>4.3K</StyledText>
            <StyledText>Follower</StyledText>
          </StyledFirstDiv>
          {svgs({ tourPackageNum: tourList.total }).map(
            ({ iconName, name }) => (
              <StyledItems
                key={iconName}
                iconName={iconName}
                showStatus={showStatus}
              >
                <StyledA href={`#${iconName}`}>
                  <StyledImgWrapper bgImg={iconName}>
                    <StyledOrangeBlock bgImg={iconName}>
                      <StyledText
                        display={iconName === 'search' ? 'none' : 'flex'}
                        color="#fff"
                        fontSize={4}
                      >
                        {name}
                      </StyledText>
                      <Icon
                        display={iconName === 'search' ? 'none' : 'flex'}
                        name="icon-chevron-right"
                        color="#fff"
                        fontSize={10}
                      />
                    </StyledOrangeBlock>
                  </StyledImgWrapper>
                </StyledA>
              </StyledItems>
            ),
          )}
        </StyledDiv>
        <StyledLastDiv
          show={showStatus}
          onClick={() => setShowStatus((e) => !e)}
        >
          <StyledText>Hide</StyledText>
          <img
            src={`/static/images/landingPage/arrow-left.svg`}
            width={9}
            height={9}
          />
        </StyledLastDiv>
        <StyledHiddenSetting
          onClick={() => setShowStatus((prevState) => !prevState)}
          show={showStatus}
        >
          <img
            src="/static/images/landingPage/sidebar/screw.svg"
            width="14.6px"
            height="14.6px"
          />
          <StyledDiv width="100%" display="flex" justifyContent="space-around">
            <StyledText fontSize="8px" color="#fff">
              Show
            </StyledText>
            <Icon name="icon-chevron-right" color="#fff" />
          </StyledDiv>
        </StyledHiddenSetting>
      </StyledSidebarContainer>
    </StyledDiv>
  );
}
