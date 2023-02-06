import { PlusOutlined } from '@ant-design/icons';
import { useTheme } from '@emotion/react';
import { Form } from 'antd';
import Button from 'components/Common/Button';
import {
  StyledCol,
  StyledImg,
  StyledRow,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledDragger } from 'components/Common/Dragger/style';
import { Input } from 'components/Common/Input';
import {
  StyledInput,
  StyledInputGroup,
  StyledSelect,
} from 'components/Common/Input/style';

const InformationForm = ({ isEdit }) => {
  const theme = useTheme();
  const { Item } = Form;

  return (
    <Form>
      <StyledRow gutter={[16, 0]}>
        <StyledCol span={18}>
          <StyledRow gutter={[16, 0]}>
            <StyledCol span={12}>
              <Item>
                <Input border="input" placeholder="First Name" />
              </Item>
            </StyledCol>
            <StyledCol span={12}>
              <Item>
                <Input border="input" placeholder="Last Name" />
              </Item>
            </StyledCol>
            <StyledCol span={12}>
              <StyledInputGroup>
                <Item>
                  <StyledInput
                    placeholder="birthday"
                    border="input"
                    borderRadius="10px 0 0 10px"
                  />
                </Item>
                <Item>
                  <StyledInput
                    placeholder="2021"
                    border="input"
                    borderRadius="0"
                  />
                </Item>
                <Item>
                  <StyledSelect
                    borderColor={theme.colors.gray[47]}
                    borderRadius="0"
                  />
                </Item>
                <Item>
                  <StyledInput
                    placeholder="06"
                    border="input"
                    borderRadius="0 10px 10px 0"
                  />
                </Item>
              </StyledInputGroup>
            </StyledCol>
            <StyledCol span={12}>
              <Item>
                <StyledSelect
                  placeholder="Nationality"
                  borderColor={theme.colors.gray[47]}
                  borderRadius={`${theme.radii.lg} !important`}
                />
              </Item>
            </StyledCol>
            <StyledCol span={12}>
              <Item>
                <Input placeholder="Passport Number" border="input" />
              </Item>
            </StyledCol>
            <StyledCol span={12}>
              <StyledRow>
                <StyledCol span={6}>
                  <Item>
                    <StyledSelect
                      placeholder="code"
                      borderColor={theme.colors.gray[47]}
                    />
                  </Item>
                </StyledCol>
                <StyledCol span={18}>
                  <Item>
                    <StyledInput
                      placeholder="Phone Number"
                      border="input"
                      borderRadius="0 10px 10px 0"
                    />
                  </Item>
                </StyledCol>
              </StyledRow>
            </StyledCol>
            <StyledCol
              span={24}
              pt="40px"
              display="flex"
              justifyContent="center"
            >
              {isEdit ? (
                <>
                  <Button
                    btnType="greenLink"
                    width="119px"
                    height="36px"
                    fontSize={2}
                  >
                    {' '}
                    Discard
                  </Button>
                  <Button ml="16px" width="119px" height="36px" fontSize={2}>
                    Save Edit
                  </Button>
                </>
              ) : (
                <Button
                  icon={<PlusOutlined />}
                  width="182px"
                  height="36px"
                  fontSize={2}
                >
                  Add to list
                </Button>
              )}
            </StyledCol>
          </StyledRow>
        </StyledCol>
        <StyledCol span={6}>
          <Item>
            <StyledDragger name="files" action="/upload.do">
              <StyledVertical alignItems="center">
                <StyledImg
                  src="/static/images/layout/upload.svg"
                  width="46px"
                  height="32px"
                />
                <StyledText color="orange.7" mt="20px">
                  Passport photo
                </StyledText>
                <StyledText mt="12px" color="orange.13" fontSize={1}>
                  You can also drag your photo and drop it here
                </StyledText>
              </StyledVertical>
            </StyledDragger>
          </Item>
        </StyledCol>
      </StyledRow>
    </Form>
  );
};

export default InformationForm;
