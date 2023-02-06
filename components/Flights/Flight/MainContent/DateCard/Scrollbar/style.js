import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  position: relative;

  .container {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .item {
    min-width: 131px;
    text-align: center;
  }

  .moveScrollbarIcon {
    &: hover {
      opacity: 100%;
    }
  }
`;
