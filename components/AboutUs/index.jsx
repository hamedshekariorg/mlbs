import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledCol,
  StyledDiv,
  StyledDivider,
  StyledRow,
  StyledText,
  StyledH3,
  StyledImg,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import ExpertsContainer from './ExpertsContainer';
import { StyledCard, StyledHeaderText, StyledHeaderTitle } from './style';
import TeamContainer from './TeamContainer';
import {
  getPreamble,
  getSpecialtiesAction,
  getTeamAction,
} from 'store/aboutUs/aboutUs.action';
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.aboutUs.preamble);
  useEffect(() => {
    dispatch(getSpecialtiesAction());
    dispatch(getTeamAction());
    dispatch(getPreamble());
  }, []);
  const { t } = useTranslation();

  const description = data?.description?.split(';') ?? [];
  return (
    <StyledDiv mt="130px" mb="72px" mx="140px" position="relative">
      <StyledHorizontal pl="48px" zIndex={1}>
        <StyledImg
          src={data?.image}
          width="690px"
          height=" 467px"
          alt="aboutUs"
          borderRadius="lg"
        />
        <StyledDiv ml="40px">
          <StyledHeaderTitle>{data?.name}</StyledHeaderTitle>
          <StyledHeaderText>{data?.slogan}</StyledHeaderText>
        </StyledDiv>
      </StyledHorizontal>
      <StyledCard>
        <StyledH3 fontSize={18} color="#fff">
          {data?.title}
        </StyledH3>
        <StyledRow>
          <StyledCol span={10}>
            <StyledText fontSize={6} color="#fff">
              {description[0]}
            </StyledText>
          </StyledCol>
          <StyledCol span={1} offset={1}>
            <StyledDivider
              type="vertical"
              borderColor="gray.22"
              height="100%"
            />
          </StyledCol>
          <StyledCol span={10} offset={1}>
            <StyledText fontSize={6} color="#fff">
              {description[1]}
            </StyledText>
          </StyledCol>
        </StyledRow>
        <StyledDiv mt="34px">
          <StyledText italic color="#fff">
            {data?.author}
          </StyledText>
        </StyledDiv>
      </StyledCard>
      <StyledDiv mt="72px">
        <StyledH3 color="gray.15" fontSize={18} textAlign="center">
          {t('aboutUs_expert')}
        </StyledH3>
        <ExpertsContainer />
      </StyledDiv>
      <StyledDiv mt="72px">
        <StyledH3 color="gray.15" fontSize={18} textAlign="center">
          {t('aboutUs_team')}
        </StyledH3>
        <TeamContainer />
      </StyledDiv>
    </StyledDiv>
  );
};

export default AboutUs;
