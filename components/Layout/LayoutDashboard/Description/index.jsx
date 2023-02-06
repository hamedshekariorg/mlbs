import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import {
  StyledDivider,
  StyledH1,
  StyledHorizontal,
  StyledRow,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import RateComponent from 'components/Common/Rate';
import Icon from 'components/Icon';
import {
  StyledAvatar,
  StyledDescription,
  StyledDropdown,
  StyledEditBtn,
  StyledUl,
  StyledLi,
  StyledTextBody,
} from './style';

const Description = () => {
  return (
    <StyledVertical p="32px 31px">
      <StyledAvatar>
        <img src="/static/images/layout/profile.svg" alt="profile" />
        <StyledEditBtn
          btnType="text"
          icon={<Icon name="icon-edit" fontSize={16} color="gray.47" />}
        />
      </StyledAvatar>
      <StyledHorizontal
        justifyContent="space-between"
        alignItems="center"
        mt="27px"
      >
        <StyledVertical>
          <StyledText fontSize={8} color="gray.15" lineHeight="22px">
            Mario Mendez
          </StyledText>
          <StyledText color="gray.47" fontSize={2} lineHeight="14px">
            Guest
          </StyledText>
        </StyledVertical>

        <RateComponent />
      </StyledHorizontal>
      <StyledDivider />
      <StyledRow>
        <StyledDescription label="Posts" span={8}>
          320
        </StyledDescription>
        <StyledDescription label="Followers" span={8}>
          320
        </StyledDescription>
        <StyledDescription label="Following" span={8}>
          320
        </StyledDescription>
      </StyledRow>
      <StyledHorizontal mt="50px" px="10px">
        <StyledDropdown icon={<CaretDownOutlined />} trigger={['click']}>
          <PlusOutlined />
          <StyledText ml="13px" color="#fff">
            New content
          </StyledText>
        </StyledDropdown>
      </StyledHorizontal>
      <StyledVertical alignItems="center" mt="123px">
        <StyledH1 fontSize={11} color="gray.50" fontWeight={8} mb="13px">
          Something useful here
        </StyledH1>
        <StyledTextBody>
          this space here gives us a good freedom to implement our ideas in the
          future such as
        </StyledTextBody>
        <StyledUl>
          <StyledLi>Promoting stuff</StyledLi>
          <StyledLi>Notifying user with new features</StyledLi>
          <StyledLi>A lead to download app</StyledLi>
        </StyledUl>
      </StyledVertical>
    </StyledVertical>
  );
};

export default Description;
