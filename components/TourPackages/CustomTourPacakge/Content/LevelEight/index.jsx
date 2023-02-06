import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledDivider,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { TextArea } from 'components/Common/Input';
import { changeActivities } from 'store/customTourPackage/customTourPackage.action';
import Layout from '../Layout';
import { StyledBox, StyledSuggestionContainer } from './style';
import Tags from './Tags';
import { todoSuggestions } from 'utils/tourPackage.utils';

const LevelEight = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const { activities } = useSelector((state) => state?.customTourPackage);

  const [suggestionList, setSuggestionList] = useState(todoSuggestions);

  // Add activity to store
  const handleKeyPress = (e) => {
    e.preventDefault();
    e.target.value.trim() !== '' &&
      !activities.includes(e.target.value.trim()) &&
      dispatch(changeActivities([...activities, value]));
    setValue('');
  };

  // Add suggestion to store
  const handleClickSuggestion = (title, id) => {
    if (!activities.includes(title)) {
      dispatch(changeActivities([...activities, title]));
      setSuggestionList((prevState) =>
        prevState.filter((item) => item.id !== id),
      );
    }
  };

  return (
    <Layout height="auto" active={activities.length} nextStep={true}>
      <StyledH3 fontSize={7}>Tell us more about what you want to do</StyledH3>
      <StyledH4 letterSpacing="0.04em" color="gray.27" fontSize={6}>
        Point out the things you would like us to consider about the tour. The
        more specific you are, the better we can help you. Don’t Worry you can
        make adjustments later.
      </StyledH4>
      <StyledBox>
        <TextArea
          value={value}
          onChange={(e) => setValue(e)}
          onPressEnter={handleKeyPress}
          maxLength="604px"
          placeholder="Tell us more about what you want to do"
          autoSize={{
            minRows: 7,
            maxRows: 7,
          }}
        />
        <StyledDivider border="input" opacity="40%" m="0" mb="12px" />
        <Tags />
      </StyledBox>
      <StyledH5 color="gray.27" fontSize={3} mb="10px">
        Some Suggestions:
      </StyledH5>
      <StyledHorizontal
        flexWrap="wrap"
        justifyContent="flex-start"
        width="88%"
        mb="56px"
      >
        {suggestionList.map(({ title, id }) => (
          <StyledSuggestionContainer
            key={id}
            onClick={() => handleClickSuggestion(title, id)}
          >
            {title}
          </StyledSuggestionContainer>
        ))}
      </StyledHorizontal>
    </Layout>
  );
};

export default LevelEight;
