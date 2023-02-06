import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import useAuthModal from 'hooks/useAuthModal';
import {
  StyledCheckbox,
  StyledH3,
  StyledH4,
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { SelectInput } from 'components/Common/Input';
import { StyledInput } from 'components/Common/Input/style';
import { StyledModal } from 'components/Common/Modal/style';
import { getCountries } from 'services/countries';
import { isIdentifierValid } from 'utils/common.utils';
import Layout from '../Layout';
import { StyledButton, StyledLoginBox, StyledPointerSpan } from './style';
import { finish } from 'store/customTourPackage/customTourPackage.action';

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { onOpen } = useAuthModal();

  const [countriesCode, setCountriesCode] = useState([]);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [active, setActive] = useState(false);
  const [isSubmitModalVisible, setIsSubmitModalVisible] = useState(false);

  // get country list
  const setCountries = async () => {
    const countries = await getCountries({ page: 1, pagination_size: 250 });
    setCountriesCode(countries);
  };

  // check if user can submit the form and send a request
  const isSendRequestActive = () => {
    !!acceptTerms &&
    !!selectedCode &&
    !!firstName &&
    !!lastName &&
    !!phoneNumber &&
    isIdentifierValid('phone', phoneNumber) &&
    !!email &&
    isIdentifierValid('email', email)
      ? setActive(true)
      : setActive(false);
  };

  // send the request when user confirms the modal
  const handleSubmitModalOk = () => {
    // todo: actually send the request to the server
    // then finish the process
    dispatch(finish());
    // then close the modal
    setIsSubmitModalVisible(false);
  };

  // close the modal when user clicks on cancel
  const handleSubmitModalCancel = () => {
    setIsSubmitModalVisible(false);
  };

  // open login modal when user clicks on login instead of filling the form
  const openLoginModal = () => {
    onOpen('login');
  };

  useEffect(() => {
    isSendRequestActive();
  }, [acceptTerms, selectedCode, phoneNumber, firstName, lastName, email]);

  useEffect(() => {
    setCountries();
  }, []);

  return (
    <Layout
      height="510px"
      prevStep={true}
      buttonText="Send the request"
      active={active}
      customFunction={() => setIsSubmitModalVisible(true)}
    >
      <StyledH3 mb="32px">Contact Information</StyledH3>
      <StyledH4 color="gray.27" letterSpacing="0.04em" mb="32px">
        We need your contact information to send your saved trip request and
        communicate with you during the process. There’s no charge to start
        planning.
      </StyledH4>
      <StyledHorizontal height="51px" width="100%" justifyContent="center">
        <StyledLoginBox>
          <StyledH4 mt="7px" color="gray.27" letterSpacing="0.04em">
            Already a member?{' '}
            <StyledPointerSpan onClick={openLoginModal}>
              Login
            </StyledPointerSpan>{' '}
            here
          </StyledH4>
        </StyledLoginBox>
      </StyledHorizontal>
      <StyledH4 color="gray.27" letterSpacing="0.04em" mt="32px">
        If you are not a member, help us be in contact with you
      </StyledH4>
      <StyledHorizontal
        justifyContent="space-between"
        flexWrap="wrap"
        width="670px"
      >
        <StyledInput
          width="327px"
          height="45px"
          borderRadius="lg"
          placeholder="First Name"
          type="text"
          mb="16px"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <StyledInput
          width="327px"
          height="45px"
          borderRadius="lg"
          placeholder="Last Name"
          type="text"
          mb="16px"
          onChange={(e) => setLastName(e.target.value)}
        />
        <StyledInput
          width="327px"
          height="45px"
          borderRadius="lg"
          placeholder="Email"
          type="email"
          mb="18.5px"
          onChange={(e) => setEmail(e.target.value)}
        />
        <SelectInput
          selectMinWidth="100px"
          options={countriesCode}
          onSelect={(item) => setSelectedCode(item.value)}
          onChange={(item) => setPhoneNumber(item)}
          selectPlaceholder="+86"
          width="327px"
          height="45px"
          borderRadius="lg"
          placeholder="Phone"
          type="number"
          mb="18.5px"
        />
        <StyledCheckbox
          onChange={(e) => setAcceptTerms(e.target.checked)}
          mb="24px"
        >
          <StyledSpan color="gray.27">I accept the </StyledSpan>
          <a>
            terms of service <StyledSpan color="gray.27">and</StyledSpan>{' '}
            privacy policy{' '}
          </a>
        </StyledCheckbox>
      </StyledHorizontal>
      <StyledModal
        top="300px"
        closable={false}
        width="444px"
        footer={false}
        visible={isSubmitModalVisible}
        onOk={handleSubmitModalOk}
        onCancel={handleSubmitModalCancel}
      >
        <StyledHorizontal alignItems="center" justifyContent="center">
          <StyledVertical alignItems="center">
            <StyledH3 mt="36px" mb="40px" color="blue.10">
              Are you Sure?
            </StyledH3>
            <StyledHorizontal mb="55px">
              <StyledButton
                onClick={handleSubmitModalCancel}
                boxShadow="btnPrimary"
                bg="#fff"
                color={theme.colors.blue[10]}
                mr="17px"
              >
                Cancel
              </StyledButton>
              <StyledButton
                onClick={handleSubmitModalOk}
                boxShadow="btnSecondary"
                bg={theme.colors.blue[10]}
                color="#fff"
              >
                Send
              </StyledButton>
            </StyledHorizontal>
          </StyledVertical>
        </StyledHorizontal>
      </StyledModal>
    </Layout>
  );
};

export default Contact;
