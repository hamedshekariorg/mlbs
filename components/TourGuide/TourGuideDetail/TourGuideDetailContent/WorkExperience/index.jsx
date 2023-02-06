import { Timeline } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import Icon from 'components/Icon';
import { StyledSpan } from 'components/Common/commonStyles';
import { tempraryTimeline } from 'utils/tourGuide.utils';

export default function WorkExperience() {
  return (
    <Timeline mode="left">
      {tempraryTimeline.map(({ id, label, iconColor, description }) => (
        <Timeline.Item key={id} dot={label}>
          <Icon
            fontSize={1}
            bg={iconColor}
            borderRadius="full"
            color="#fff"
            p={1}
          >
            <CheckOutlined />
          </Icon>
          <StyledSpan ml={2}>{description}</StyledSpan>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
