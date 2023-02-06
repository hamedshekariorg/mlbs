import { Form } from 'antd';
import { StyledCol, StyledRow, StyledH3 } from 'components/Common/commonStyles';
import {
  StyledReviewDescriptionContainer,
  StyledReviewText,
  StyledRateContainer,
} from './style';
import { Input, TextArea } from 'components/Common/Input';
import Button from 'components/Common/Button';
import RateComponent from 'components/Common/Rate';
import { postCommentsAction } from 'store/comments/comments.action';
import { getCookie } from 'utils/auth.utils';
import { commentErrors } from 'utils/common.utils';
import { useRouter } from 'next/router';

const { Item } = Form;
const Review = ({ entity }) => {
  const router = useRouter();
  const { id } = router.query;

  //submit comment
  const onFinish = (values) =>
    postCommentsAction({ data: { ...values, entity }, id: id });

  return (
    <>
      <StyledH3 fontSize={18} color="gray.15" mb="49px">
        Review Description
      </StyledH3>
      <StyledReviewDescriptionContainer>
        <StyledReviewText>Your rating for this hotel</StyledReviewText>
        <StyledRateContainer>
          <RateComponent defaultValue={0} rateVisible={true} />
          <StyledReviewText mt="8px">0 / 5</StyledReviewText>
        </StyledRateContainer>
        <Form onFinish={onFinish} autoComplete="off">
          <StyledRow gutter={[8, 8]} width="100%">
            {!getCookie('access_token') && (
              <>
                <StyledCol span={12}>
                  <Item name="full_name" rules={commentErrors.name}>
                    <Input border="textarea" placeholder="Name" />
                  </Item>
                </StyledCol>
                <StyledCol span={12}>
                  <Item name="email" rules={commentErrors.email}>
                    <Input border="textarea" placeholder="Email" />
                  </Item>
                </StyledCol>
              </>
            )}
            <StyledCol span={24}>
              <Item name="comment" rules={commentErrors.review}>
                <TextArea border="textarea" placeholder="Review" rows={6} />
              </Item>
            </StyledCol>
            <StyledCol span={24} textAlign="right">
              <Button htmlType="submit" btnType="secondary" width="175px">
                Submit review
              </Button>
            </StyledCol>
          </StyledRow>
        </Form>
      </StyledReviewDescriptionContainer>
    </>
  );
};

export default Review;
