import { useState } from 'react';
import {
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
  StyledImg,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledItems,
  StyledText,
  StyledCount,
  StyledTitle,
} from './style';
import {
  temporarySocialArr,
  temporarySocialCards,
} from 'utils/dashboard.utils';

const Social = () => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImg src="/static/images/dashboard/social.svg" />
        <StyledText>Social</StyledText>
      </StyledDiv>
      <StyledHorizontal mt="36px">
        {temporarySocialArr.map(({ title, id }) => (
          <StyledItems
            key={id}
            selected={id === selectedId}
            onClick={() => setSelectedId(id)}
          >
            <span>{title}</span>
          </StyledItems>
        ))}
      </StyledHorizontal>

      <StyledVertical mt="29px">
        {temporarySocialCards.map(({ id, title, img, staticArr }) => (
          <StyledHorizontal key={id} mt="22px">
            <StyledDiv borderRadius="lg" overflow="hidden" key={id}>
              <StyledImg
                width="134px"
                height="85px"
                src={`/static/images/dashboard/delete/${img}`}
              />
            </StyledDiv>
            <StyledVertical ml="16px">
              <StyledTitle>{title}</StyledTitle>
              <StyledHorizontal>
                {staticArr.map(({ id, count, img }) => (
                  <StyledHorizontal
                    key={id}
                    justifyContent="space-between"
                    alignItems="center"
                    mt="23px"
                  >
                    <StyledImg
                      width="20px"
                      height="20px"
                      src={`/static/images/delete/${img}`}
                    />
                    <StyledCount>{count}</StyledCount>
                  </StyledHorizontal>
                ))}
              </StyledHorizontal>
            </StyledVertical>
          </StyledHorizontal>
        ))}
      </StyledVertical>
    </StyledContainer>
  );
};

export default Social;
