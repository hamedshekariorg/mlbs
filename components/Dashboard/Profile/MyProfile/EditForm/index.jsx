import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useZone from 'hooks/useZone';
import { useForm } from 'react-hook-form';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {
  StyledAvatar,
  StyledCol,
  StyledH3,
  StyledHorizontal,
  StyledRow,
} from 'components/Common/commonStyles';
import Button from 'components/Common/Button';
import Icon from 'components/Icon';
import { getEditProfileAction } from 'store/auth/auth.action';
import DeleteModal from 'components/Common/Modal/DeleteModal';
import {
  FormProvider,
  Input,
  Select,
  DateInput,
} from 'components/Common/HookForm';
import { validationSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { setProfileFormDefaultValue } from 'utils/dashboard.utils';
import { getBase64 } from 'utils/common.utils';

export const EditForm = ({ changeMode }) => {
  const dispatch = useDispatch();
  const { profile, editProfile } = useSelector((state) => state.auth);
  const methods = useForm({
    defaultValues: setProfileFormDefaultValue(profile?.data),
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, watch, setValue } = methods;
  const { country_id: countryId, state_id: stateId } = watch();
  const { countriesOption, statesOption, citiesOption } = useZone(
    countryId,
    stateId,
  );

  useEffect(() => {
    if (countryId === profile?.data?.country_id) {
      setValue('state_id', profile?.data?.state_id);
    } else {
      setValue('state_id', null);
    }
  }, [countryId]);

  useEffect(() => {
    if (stateId === profile?.data?.state_id) {
      setValue('city_id', profile?.data?.city_id);
    } else {
      setValue('city_id', null);
    }
  }, [stateId]);

  const [image, setImage] = useState(null);

  // image file
  const [imageFile, setImageFile] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    profile?.data?.image && setImage(profile?.data?.image);
  }, [profile?.data?.image]);

  const beforeUploadImage = async (file) => {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must smaller than 5MB!');
      return;
    }
    setImageFile(file);
    file.preview = await getBase64(file);
    setImage(file.url || file.preview);
    return false;
  };

  const onSubmit = (data) => {
    if (imageFile) {
      const formData = new FormData();
      imageFile && formData.append('image', imageFile);
      //loop on data and create formData
      Object.keys(data).forEach((key) => {
        data[key] && formData.append(key, data[key]);
      });
      //edit action for when profile has no photo
      dispatch(getEditProfileAction(formData));
    }
    //edit action for when profile  photo
    else {
      dispatch(getEditProfileAction(data));
    }
  };

  return (
    <>
      <StyledHorizontal alignItems="center" mb="32px">
        <StyledAvatar size={98} src={image} mr="24px" />
        <ImgCrop
          rotate
          shape="round"
          modalOk="Apply"
          modalTitle="Adjust profile photo"
          zoom={false}
          modalWidth="509px"
        >
          <Upload
            showUploadList={false}
            maxCount={1}
            beforeUpload={beforeUploadImage}
          >
            <Button
              height="36px"
              width="131px"
              fontSize={2}
              icon={<Icon name="icon-camera" mr="13px" fontSize={8} />}
            >
              Upload photo
            </Button>
          </Upload>
        </ImgCrop>
        <Button
          btnType="greenLink"
          ml="16px"
          height="36px"
          width="131px"
          onClick={() => setVisible(true)}
        >
          Delete photo
        </Button>
      </StyledHorizontal>
      <FormProvider methods={methods}>
        <StyledRow gutter={[16, 16]}>
          <StyledCol span={12}>
            <Input name="first_name" placeholder="First Name" />
          </StyledCol>
          <StyledCol span={12}>
            <Input name="last_name" placeholder="Last Name" />
          </StyledCol>
          <StyledCol span={12}>
            <Input name="nickname" placeholder="NickName" />
          </StyledCol>
          <StyledCol span={12}>
            <Input name="email" placeholder="Email" disabled />
          </StyledCol>
          <StyledCol span={12}>
            <Input name="mobile" placeholder="Phone" disabled />
          </StyledCol>
          <StyledCol span={12}>
            <DateInput name="birth_day" placeholder="Birthday" />
          </StyledCol>
          <StyledCol span={12}>
            <Select name="gender" placeholder="Gender">
              <Option value="man">man</Option>
              <Option value="woman">woman</Option>
            </Select>
          </StyledCol>
          <StyledCol span={24}>
            <StyledH3 fontSize={6} color="gray.15" mt="30px" mb="10px">
              Address
            </StyledH3>
          </StyledCol>
          <StyledCol span={12}>
            <Select name="country_id" placeholder="Country" showSearch>
              {countriesOption}
            </Select>
          </StyledCol>
          <StyledCol span={12}>
            <Select name="state_id" placeholder="State" showSearch>
              {statesOption}
            </Select>
          </StyledCol>
          <StyledCol span={12}>
            <Select name="city_id" placeholder="City" showSearch>
              {citiesOption}
            </Select>
          </StyledCol>
          <StyledCol span={12}>
            <Input name="postalCode" placeholder="PostalCode" />
          </StyledCol>
          <StyledCol span={12}>
            <Input name="address" placeholder="Address" />
          </StyledCol>
        </StyledRow>
        <StyledHorizontal width="100%" justifyContent="end" mt="28px">
          <Button
            mr="16px"
            width="131px"
            height="36px"
            btnType="greenLink"
            onClick={changeMode}
          >
            Cancel
          </Button>
          <Button
            height="36px"
            width="131px"
            loading={editProfile?.loading}
            onClick={handleSubmit(onSubmit)}
          >
            Save Edit
          </Button>
        </StyledHorizontal>
      </FormProvider>
      <DeleteModal visible={visible} onCancel={() => setVisible(false)} />
    </>
  );
};
