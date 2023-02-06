import { useState } from 'react';
import { useTheme } from '@emotion/react';
import {
  StyledDiv,
  StyledH3,
  StyledH4,
  StyledHorizontal,
  StyledImg,
  StyledTag,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import ContainerCard from 'components/Dashboard/components/ContainerCard';
import Table from 'components/Dashboard/components/Table';
import InformationForm from './InformationForm';
import Icon from 'components/Icon';
import { data } from 'utils/dashboard.utils';
import { StyledButton, StyledModal } from './style';
import Button from 'components/Common/Button';
const Passengers = () => {
  const theme = useTheme();
  const [editModal, setEditModal] = useState({
    visible: false,
    data: null,
  });
  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: null,
  });
  const [imageModal, setImageModal] = useState({
    visible: false,
    image: null,
  });
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <>
          <StyledTag
            borderRadius="full"
            color={theme.colors.blue[34]}
            mr="12px"
          >
            <StyledText color="gray.15">{record.key}</StyledText>
          </StyledTag>
          <StyledText color="gray.15">{text}</StyledText>
        </>
      ),
    },
    {
      title: 'Passport Number',
      dataIndex: 'passportNumber',
      render: (text) => <StyledText color="gray.15">{text}</StyledText>,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      render: (text) => <StyledText color="gray.15">{text}</StyledText>,
    },
    {
      title: 'Options',
      dataIndex: 'options',
      render: (_, record) => (
        <>
          <StyledButton
            icon={<Icon name="icon-edit " color="gray.47" fontSize={15} />}
            onClick={() => setEditModal({ visible: true, data: record })}
          />
          <StyledButton
            onClick={() =>
              setImageModal({ visible: true, image: record.image })
            }
            icon={<Icon name="icon-image" color="gray.47" fontSize={15} />}
          />
          <StyledButton
            onClick={() => setDeleteModal({ visible: true, id: record.id })}
            icon={<Icon name="icon-delete" color="red.3" fontSize={15} />}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <StyledH4 color="gray.15" fontSize={6} mb="16px">
        Passenger Information
      </StyledH4>
      <ContainerCard>
        <InformationForm />
      </ContainerCard>
      <StyledH4 color="gray.15" fontSize={6} mt="44px" mb="16px">
        Passengers List
      </StyledH4>
      <ContainerCard>
        <Table columns={columns} dataSource={data} pagination={false} />
        <StyledModal
          visible={editModal.visible}
          closable={false}
          width="768px"
          footer={null}
          onCancel={() => setEditModal({ visible: false })}
        >
          <ContainerCard>
            <StyledH4 color="gray.15" fontSize={6} mb="16px">
              Passenger Information
            </StyledH4>
            <InformationForm isEdit />
          </ContainerCard>
        </StyledModal>

        <StyledModal
          visible={deleteModal.visible}
          footer={null}
          closable={false}
          onCancel={() => setDeleteModal({ visible: false })}
          width="444px"
        >
          <StyledVertical p="40px" alginItems="center" justifyContent="center">
            <StyledH3 textAlign="center" fontSize={12} color="blue.10">
              Are you Sure ?
            </StyledH3>
            <StyledHorizontal justifyContent="center" mt="100px">
              <Button
                width="131px"
                btnType="greenLink"
                onClick={() => setDeleteModal({ visible: false })}
              >
                Cancel
              </Button>
              <Button ml="16px" width="131px" btnType="red">
                Delete
              </Button>
            </StyledHorizontal>
          </StyledVertical>
        </StyledModal>

        <StyledModal
          onCancel={() => setImageModal({ visible: false })}
          visible={imageModal.visible}
          footer={null}
          width="605px"
          closeIcon={<Icon name="icon-cancel" color="orange.7" fontSize={15} />}
        >
          <StyledDiv p="23px 40px">
            <StyledH4 fontSize={6} color="gray.15">
              <Icon
                name="icon-passengers"
                fontSize={12}
                color="gray.15"
                mr="12px"
              />
              Passport photo preview
            </StyledH4>
            <StyledHorizontal
              m="40px auto"
              p="10px 14px"
              width="421px"
              height="565px"
              border="input"
            >
              <StyledDiv>
                <StyledImg
                  src="/static/images/dashboard/passenger.svg"
                  alt="Passenger"
                  width="100%"
                />
              </StyledDiv>
            </StyledHorizontal>
          </StyledDiv>
        </StyledModal>
      </ContainerCard>
    </>
  );
};

export default Passengers;
