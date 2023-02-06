import { SearchOutlined } from '@ant-design/icons';
import {
  StyledHorizontal,
  StyledImg,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledInput } from 'components/Common/Input/style';
import DateInput from 'components/Common/Search/DateInput';
import NationalityInput from 'components/Common/Search/NationalityInput';
import { insuranceTabPartners } from 'utils/search.utils';
import Button from 'components/Common/Button';

const InsuranceTab = () => {
  return (
    <StyledVertical position="relative">
      <StyledHorizontal
        position="absolute"
        alignItems="center"
        fontSize={2}
        right="0"
        color="gray.27"
        top="-30px"
      >
        {insuranceTabPartners.map(({ icon, value }) => (
          <StyledImg
            src={icon}
            key={value}
            alt="partner-icon"
            mx="3px"
            opacity="0.7"
          />
        ))}

        <StyledSpan>Our Partners</StyledSpan>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between" mt="38px">
        <NationalityInput
          placeholder="From"
          tab="otherServices"
          width="500px"
        />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Passport Number"
        />
        <DateInput tab="otherServices" />
        <Button width="180px">
          <SearchOutlined /> Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default InsuranceTab;
