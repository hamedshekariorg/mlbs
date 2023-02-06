import React, { useState } from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledVertical,
  StyledHorizontal,
  StyledText,
} from 'components/Common/commonStyles';
import {
  StyledBlock,
  StyledImage,
  StyledExpandedBlock,
  StyledArrow,
  StyledTxt,
} from './style';

const PesudoInput = ({ data, ...rest }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledDiv {...rest}>
      <StyledBlock position="relative">
        <StyledImage
          left="11px"
          width="13px"
          height="13px"
          src="/static/images/delete/user.svg"
        />
        <StyledDiv ml="32px">
          {!open ? (
            <StyledTxt>Travelers</StyledTxt>
          ) : (
            <>
              {data.map(({ id, num, singuralLabel, pluralLabel }) => (
                <StyledTxt key={id}>
                  {num > 0
                    ? `${num} ${pluralLabel},`
                    : ` ${num} ${singuralLabel}`}
                </StyledTxt>
              ))}
            </>
          )}
        </StyledDiv>
        <StyledImage
          cursor="pointer"
          onClick={() => setOpen((prev) => !prev)}
          position="absolute"
          right="19.59px"
          width="12px"
          height="7.5px"
          src={`/static/images/delete/${
            open ? 'arrowheadup.svg' : 'arrowheaddown.svg'
          }`}
        />
      </StyledBlock>
      <StyledExpandedBlock open={open}>
        <StyledArrow />
        {data.map(
          ({ id, num, singuralLabel, pluralLabel, setEvent, detail }) => (
            <StyledHorizontal key={id} alignItems="center" flex="1">
              <StyledVertical flex="1">
                {num > 0 ? pluralLabel : singuralLabel}
                <StyledText
                  fontWeight="5"
                  fontSize="1"
                  lineHeight="13px"
                  color="gray.47"
                >
                  {detail || ''}
                </StyledText>
              </StyledVertical>
              <StyledHorizontal flex="1" justifyContent="space-between">
                <StyledImg
                  onClick={() =>
                    setEvent((prev) => (prev === 0 ? 0 : prev - 1))
                  }
                  width="24px"
                  height="24px"
                  src="/static/images/minus.svg"
                />
                <StyledText>{num}</StyledText>
                <StyledImg
                  onClick={() => setEvent((prev) => prev + 1)}
                  width="24px"
                  height="24px"
                  src="/static/images/plus.svg"
                />
              </StyledHorizontal>
            </StyledHorizontal>
          ),
        )}
      </StyledExpandedBlock>
    </StyledDiv>
  );
};
export default PesudoInput;
