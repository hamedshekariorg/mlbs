import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsAction,
  sendTicket,
} from 'store/contactUs/contactUs.action';
import { Form, Tooltip } from 'antd';
import {
  StyledCol,
  StyledDiv,
  StyledFormItem,
  StyledRow,
  StyledText,
  StyledH3,
} from 'components/Common/commonStyles';
import { Input, TextArea } from 'components/Common/Input';
import Button from 'components/Common/Button';
import Icon from 'components/Icon';
import {
  StyledFormCard,
  StyledContainer,
  StyledHeaderTitle,
  StyledContactCard,
  StyledButton,
} from './style';
import {useTranslation} from "react-i18next";

const ContactUs = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactUs.items);
  useEffect(() => {
    dispatch(getContactsAction());
  }, []);

  const onFinish = (data) => sendTicket(data);
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledDiv px="50px">
        <StyledFormCard>
          <StyledDiv mb="48px">
            <StyledHeaderTitle>{t('contactUs_title')}</StyledHeaderTitle>
            <StyledText color="gray.27" fontSize={9}>
              {t('contactUs_subtitle')}
            </StyledText>
          </StyledDiv>
          <Form autoComplete="off" onFinish={onFinish}>
            <StyledRow>
              <StyledCol span={12}>
                <StyledFormItem
                  mx="8px"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Name" border="input" color="orange.13" />
                </StyledFormItem>
              </StyledCol>
              <StyledCol span={12}>
                <StyledFormItem
                  mx="8px"
                  name="email"
                  rules={[{ required: true }, { type: 'email' }]}
                >
                  <Input placeholder="Email" border="input" color="orange.13" />
                </StyledFormItem>
              </StyledCol>
              <StyledCol span={24}>
                <StyledFormItem
                  mx="8px"
                  name="ticket"
                  rules={[{ required: true }]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Note"
                    border="input"
                    color="orange.13"
                  />
                </StyledFormItem>
              </StyledCol>
              <StyledCol span={24} px="12px">
                <StyledDiv
                  mx="8px"
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Tooltip
                    placement="topRight"
                    title={
                      <StyledText color="gray.27">
                        {t('contactUs_note')}{' '}
                      </StyledText>
                    }
                    color="#fff"
                    overlayInnerStyle={{
                      padding: '13px',
                    }}
                  >
                    <StyledButton type="text">
                      <Icon
                        name="icon-information"
                        color="orange.13"
                        fontSize={18}
                      />
                    </StyledButton>
                  </Tooltip>
                  <Button htmlType="submit" fontSize={6} px="34px">
                    {t('contactUs_button')}
                  </Button>
                </StyledDiv>
              </StyledCol>
            </StyledRow>
          </Form>
        </StyledFormCard>
      </StyledDiv>
      <StyledRow mt="72px" width="100%">
        {contacts.map(({ id, image, title, description }, index) => (
          <StyledCol span={8} key={id} display="flex">
            <StyledContactCard border={index === 1}>
              <img src={image} alt={title} />
              <StyledH3 fontSize={8} color="gray.27" mt="35px">
                {title}
              </StyledH3>
              <StyledText color="gray.27" fontSize={6}>
                {description}
              </StyledText>
            </StyledContactCard>
          </StyledCol>
        ))}
      </StyledRow>
    </StyledContainer>
  );
};

export default ContactUs;
