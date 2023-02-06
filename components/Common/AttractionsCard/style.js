import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.space[0]};
  left: ${({ theme }) => theme.space[0]};
  width: 100%;
  height: 45%;
  padding: ${({ theme }) => theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.5s;
  background: ${({ theme }) => theme.colors.gradient[6]};
  button {
    display: none;
  }
  button:hover {
    background: none;
    color: white;
    border: 1px solid white;
    opacity: 0.8;
  }
`;
export const StyledText = styled.span`
  left: ${({ theme }) => theme.space[0]};
  position: absolute;
  transition: all 0.5s ease;
  transform: translateX(0);
  text-align: center;
  span {
    display: none;
  }
`;
export const StyledCard = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  height:100%;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover ${StyledOverlay} {
      height: 100%;
      button {
        display: block;
      }
      ${StyledText}{
          left: 50%;
          transform: translateX(-50%);
          span{
            display:block;  
          }
        }
      
    }
  }
`;
export const StyledBody = styled.div`
  position: relative;
  text-align: left;
  color: white;
  width: 100%;
  height: 100%;
`;
