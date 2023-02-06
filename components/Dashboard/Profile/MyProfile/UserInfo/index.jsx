import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import Button from 'components/Common/Button';
import {
  StyledDiv,
  StyledH3,
  StyledHorizontal,
  StyledRow,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import Error from 'components/Common/Error';
import Loading from 'components/Common/Loading';
import Icon from 'components/Icon';
import { StyledContentItem, StyledHDivider, StyledVDivider } from './style';

export const UserInfo = ({ changeMode }) => {
  const { data, loading, error } = useSelector((state) => state.auth.profile);
  const {
    username,
    first_name,
    last_name,
    mobile,
    nickname,
    gender,
    email,
    birth_day,
    address,
    image,
    country_info,
  } = data;
  const { country_name, state_name, city_name } = country_info || {};
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <StyledHorizontal justifyContent="space-between">
        <StyledHorizontal alignItems="center">
          <Avatar size={90} src={image} />
          <StyledVertical pl="24px">
            <StyledText color="green.19" opacity="0.6" fontSize={2}>
              {username}
            </StyledText>
            <StyledText color="green.19" fontSize={6}>
              {first_name + ' ' + last_name}
            </StyledText>
          </StyledVertical>
        </StyledHorizontal>
        <Button
          icon={<Icon name="icon-edit" fontSize={12} mr="12px" />}
          onClick={changeMode}
          height="36px"
          fontSize={2}
          px="23px"
        >
          Edit profile
        </Button>
      </StyledHorizontal>
      <StyledDiv pr="140px">
        <StyledRow mt="39px">
          <StyledContentItem span={11} label="First Name">
            {first_name}
          </StyledContentItem>
          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Last Name">
            {last_name}
          </StyledContentItem>
          <StyledHDivider />

          <StyledContentItem span={11} label="Nickname">
            {nickname}
          </StyledContentItem>

          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Email">
            {email}
          </StyledContentItem>
          <StyledHDivider />

          <StyledContentItem span={11} label="Phone">
            {mobile}
          </StyledContentItem>

          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Birthday">
            {birth_day}
          </StyledContentItem>
          <StyledHDivider />
          <StyledContentItem span={11} label="Gender">
            {gender}
          </StyledContentItem>
        </StyledRow>
        <StyledH3 mt="73px" color="gray.15" fontSize={9}>
          Address
        </StyledH3>
        <StyledRow>
          <StyledContentItem span={11} label="country">
            {country_name}
          </StyledContentItem>
          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Province">
            {state_name}
          </StyledContentItem>
          <StyledHDivider />

          <StyledContentItem span={11} label="city">
            {city_name}
          </StyledContentItem>
          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Street">
            {address}
          </StyledContentItem>
          <StyledHDivider />
          <StyledContentItem span={11} label="Apt, suit, unit, etc (optional)">
            -
          </StyledContentItem>
          <StyledContentItem span={2}>
            <StyledVDivider />
          </StyledContentItem>
          <StyledContentItem span={11} label="Postal Code">
            -
          </StyledContentItem>
        </StyledRow>
      </StyledDiv>
    </>
  );
};
