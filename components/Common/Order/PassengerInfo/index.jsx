import uploadPassport from 'public/static/images/uploadPassport.svg';
import { PlusOutlined } from '@ant-design/icons';
import {
  StyledContainer,
  StyledFormWrapper,
  StyledCheckbox,
  StyledButton,
  StyledUploadContainer,
  StyledUploadWrapper,
  StyledSelect,
  StyledCustomText,
} from './style';
import { SelectInput } from 'components/Common/Input';
import { StyledInput, StyledOption } from 'components/Common/Input/style';
import {
  StyledDiv,
  StyledImg,
  StyledRow,
  StyledH3,
  StyledHorizontal,
  StyledCol,
} from 'components/Common/commonStyles';
import { useTheme } from '@emotion/react';
import Icon from 'components/Icon';

const options = [
  {
    label: 'number 1',
    value: '1',
  },
];

const codes = [
  {
    label: '+98',
    value: 'IR',
  },
];

const months = [
  {
    label: 'Jun',
    value: 'June',
  },
];

const PassengerInfo = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledDiv width="100%" height="100%">
        <StyledFormWrapper>
          <StyledRow gutter={[8, 24]}>
            <StyledCol span={12}>
              <StyledInput
                placeholder="First Name"
                fontSize={2}
                fontWeight={5}
                lineHeight="14px"
                color="gray.38"
                borderRadius="lg"
              />
            </StyledCol>
            <StyledCol span={12}>
              <StyledInput
                placeholder="Last Name"
                fontSize={2}
                fontWeight={5}
                lineHeight="14px"
                color="gray.38"
                borderRadius="lg"
              />
            </StyledCol>
            <StyledCol span={12}>
              <StyledHorizontal
                width="100%"
                alignItems="center"
                justifyContent="center"
              >
                <StyledHorizontal
                  flex={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <StyledInput
                    fontSize={2}
                    flex={0.7}
                    placeholder="Birthday"
                    fontWeight={5}
                    lineHeight="14px"
                    color="gray.38"
                    borderRadius={`${theme.radii.lg} 0px 0px ${theme.radii.lg}`}
                  />
                  <StyledInput
                    flex={0.6}
                    placeholder="2022"
                    fontSize={2}
                    fontWeight={5}
                    lineHeight="14px"
                    color="gray.38"
                  />
                </StyledHorizontal>
                <StyledHorizontal flex={0.7} alignItems="center">
                  <StyledSelect
                    flex={0.7}
                    placeholder="Jul."
                    showSearch
                    fontSize={2}
                    fontWeight={5}
                    lineHeight="14px"
                    color="gray.38"
                  >
                    {months?.map((item, index) => (
                      <StyledOption key={`${index}`} value={item.value}>
                        {item.label}
                      </StyledOption>
                    ))}
                  </StyledSelect>
                  <StyledInput
                    borderRadius={`0px ${theme.radii.lg} ${theme.radii.lg} 0px`}
                    placeholder="06"
                    fontSize={0}
                    fontWeight={5}
                    lineHeight="14px"
                    color="gray.38"
                  />
                </StyledHorizontal>
              </StyledHorizontal>
            </StyledCol>
            <StyledCol span={12}>
              <StyledSelect
                placeholder="Nationality"
                borderRadius={theme.radii.lg}
                showSearch
                fontSize={2}
                fontWeight={5}
                lineHeight="14px"
                color="gray.38"
              >
                {options?.map(({ label, value }, index) => (
                  <StyledOption key={`${index}`} value={value}>
                    {label}
                  </StyledOption>
                ))}
              </StyledSelect>
            </StyledCol>
            <StyledCol span={12}>
              <StyledInput
                fontSize={2}
                borderRadius="lg"
                placeholder="Passport Number"
                fontWeight={5}
                lineHeight="14px"
                color="gray.38"
              />
            </StyledCol>
            <StyledCol span={12}>
              <SelectInput
                selectStyle={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '14px',
                  color: 'gray.38',
                }}
                inputStyle={{
                  textAlign: 'left',
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: '14px',
                  color: 'gray.38',
                }}
                selectPlaceholder="Code"
                minWidth="100%"
                selectMinWidth="70px"
                placeholder="Phone Number"
                options={codes}
              />
            </StyledCol>
            <StyledCheckbox>
              <StyledCustomText color="orange.13">
                I accept the{' '}
                <StyledCustomText color="blue.10">
                  terms of service
                </StyledCustomText>{' '}
                and
                <StyledCustomText color="blue.10">
                  {' '}
                  privacy policy
                </StyledCustomText>
              </StyledCustomText>
            </StyledCheckbox>
            <StyledHorizontal width="100%" justifyContent="center">
              <StyledButton>
                <Icon color="#fff" fontSize={3} mr={2}>
                  <PlusOutlined />
                </Icon>
                <StyledH3
                  fontSize={1}
                  fontWeight={5}
                  lineHeight="14px"
                  textAlign="center"
                  letterSpacing="0.05em"
                  color="#fff"
                  mt={2}
                >
                  Add to list
                </StyledH3>
              </StyledButton>
            </StyledHorizontal>
          </StyledRow>
        </StyledFormWrapper>
      </StyledDiv>

      <StyledUploadContainer>
        <StyledUploadWrapper>
          <StyledImg
            src={uploadPassport}
            width={47}
            height={33}
            mb="24px"
            alt="uplaod"
          />
          <StyledH3
            fontSize={7}
            lineHeight="17px"
            textAlign="center"
            letterSpacing="0.05em"
            color="orange.7"
          >
            Passport photo
          </StyledH3>
          <StyledH3
            fontSize={2}
            color="orange.13"
            fontWeight={5}
            textAlign="center"
            letterSpacing="0.05em"
          >
            You can also drag your photo and drop it here
          </StyledH3>
        </StyledUploadWrapper>
      </StyledUploadContainer>
    </StyledContainer>
  );
};

export default PassengerInfo;
