import cancel from 'public/static/images/infoCardsContent/cancel.svg';
import cip from 'public/static/images/infoCardsContent/cip.svg';
import flightInsurance from 'public/static/images/infoCardsContent/insurance.svg';
import help from 'public/static/images/infoCardsContent/help.svg';
import payment from 'public/static/images/infoCardsContent/payment.svg';
import pickup from 'public/static/images/infoCardsContent/pickup.svg';
import reserve from 'public/static/images/infoCardsContent/reserve.svg';
import visa from 'public/static/images/infoCardsContent/visa.svg';
import {
  StyledDiv,
  StyledImg,
  StyledText,
} from 'components/Common/commonStyles';

export const passengersModalContent = {
  dataSource: [
    {
      key: 1,
      passportNumber: 'E918127162',
      phoneNumber: '+98-9021788625',
      name: 'Kamal Tamini',
    },
    {
      key: 2,
      passportNumber: 'E256331478',
      phoneNumber: '+98-9121234567',
      name: 'Elnaz Mo',
    },
    {
      key: 3,
      passportNumber: 'E255456699',
      phoneNumber: '+98-9012145678',
      name: 'Hossein Moein',
    },
  ],

  columns: [
    {
      title: (
        <StyledText
          fontSize={6}
          lineHeight={1}
          color="gray.27"
          textAlign="center"
        >
          Name
        </StyledText>
      ),
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <StyledText
          fontWeight={5}
          fontSize={4}
          lineHeight={1}
          color="gray.27"
          textAlign="center"
        >
          {name}
        </StyledText>
      ),
    },
    {
      title: (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledText
            fontSize={6}
            lineHeight={1}
            color="gray.27"
            textAlign="center"
          >
            Passport Number
          </StyledText>
        </StyledDiv>
      ),
      dataIndex: 'passportNumber',
      key: 'passportNumber',
      render: (passportNumber) => (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledText
            fontWeight={5}
            fontSize={4}
            lineHeight={1}
            color="gray.27"
            textAlign="center"
          >
            {passportNumber}
          </StyledText>
        </StyledDiv>
      ),
    },
    {
      title: (
        <StyledDiv
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StyledText
            fontSize={6}
            lineHeight={1}
            color="gray.27"
            textAlign="center"
          >
            Phone Number
          </StyledText>
        </StyledDiv>
      ),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (phoneNumber) => (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledText
            fontWeight={5}
            fontSize={4}
            lineHeight={1}
            color="gray.27"
            textAlign="center"
          >
            {phoneNumber}
          </StyledText>
        </StyledDiv>
      ),
    },
  ],

  rowSelection: {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  },
};

export const fakeDateCardInfo = [
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
  {
    date: '2020-03-11',
    price: '¥146.99',
  },
];

export const flightPriceCardTestData = [
  { title: 'Adult', value: 2 },
  { title: 'Children', value: 0 },
  { title: 'Infant', value: 0 },
];
