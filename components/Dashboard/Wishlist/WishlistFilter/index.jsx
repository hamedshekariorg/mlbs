import { useState } from 'react';
import {
  StyledImg,
  StyledSpan,
  StyledDiv,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledItems,
  StyledDropDownItems,
  StyledExpandedBlock,
  StyledArrow,
  StyledTitle,
} from './style';
import {
  temporaryFilterItems,
  temporaryFilterTitle,
} from 'utils/dashboard.utils';

const WishlistCard = () => {
  const [openCity, setOpenCity] = useState(false);
  const [openRecent, setOpenRecent] = useState(true);

  const handleOpening = (key) => {
    key === 'city'
      ? setOpenCity((prev) => !prev)
      : setOpenRecent((prev) => !prev);
  };

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledDiv mt="20px">
          <StyledSpan
            fontWeight="6"
            fontSize="4"
            lineHeight="17px"
            color="gray.27"
          >
            Sort by:
          </StyledSpan>
        </StyledDiv>
        <StyledHorizontal py="19px" mb="6px" borderBottom="footer">
          {temporaryFilterTitle.map(({ title, key }) => (
            <StyledDiv
              key={key}
              mr="29px"
              position="relative"
              cursor="pointer"
              onClick={() => handleOpening(key)}
            >
              <StyledExpandedBlock
                open={key === 'city' ? openCity : openRecent}
                right="-13px"
              >
                <StyledArrow />
                <StyledDropDownItems>
                  <span>Province</span>
                </StyledDropDownItems>
                <StyledDropDownItems>
                  <span>City</span>
                </StyledDropDownItems>
              </StyledExpandedBlock>
              <StyledTitle>{title}</StyledTitle>
              <StyledImg
                src="/static/images/delete/arrow-down.svg"
                width="5px"
                height="3px"
              />
            </StyledDiv>
          ))}
        </StyledHorizontal>
        <StyledHorizontal flexWrap="wrap">
          {temporaryFilterItems.map((label) => (
            <StyledItems key={label}>
              <StyledSpan>{label}</StyledSpan>
            </StyledItems>
          ))}
        </StyledHorizontal>
      </StyledDiv>
    </StyledContainer>
  );
};

export default WishlistCard;
