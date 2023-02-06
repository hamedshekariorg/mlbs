import { useSelector } from 'react-redux';
import {
  StyledDivider,
  StyledH4,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { StyledContainer, TagContainer } from './style';
import { useDispatch } from 'react-redux';
import { changeActivities } from 'store/customTourPackage/customTourPackage.action';

const Tags = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state?.customTourPackage);

  const handleRemove = (item) => {
    dispatch(
      changeActivities(activities.filter((activity) => item !== activity)),
    );
  };

  return (
    <StyledContainer>
      {activities.map((item) => (
        <TagContainer key={item}>
          <StyledHorizontal
            height="100%"
            alignItems="center"
            justifyContent="center"
            width="auto"
            paddingLeft="12px"
          >
            <StyledH4 color="gray.27" mt="6px" textAlign="right" mr="8px">
              {item}
            </StyledH4>
            <StyledDivider type="vertical" height="100%" border="input" m="0" />
          </StyledHorizontal>
          <StyledHorizontal
            width="38px"
            alignItems="center"
            justifyContent="center"
            mb={1}
          >
            <Icon
              name="icon-cancel"
              color="red.3"
              fontSize={16}
              cursor="pointer"
              onClick={() => handleRemove(item)}
            />
          </StyledHorizontal>
        </TagContainer>
      ))}
    </StyledContainer>
  );
};

export default Tags;
