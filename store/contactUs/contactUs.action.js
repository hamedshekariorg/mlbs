import { message } from 'antd';
import request from 'services/request';
import {
  GET_CONTACTS_ERROR,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  SEND_TICKET_KEY,
} from './contactUs.constant';
import { getContactsUrl, sendTicketUrl } from './contactUs.service';

export const getContactsAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CONTACTS_REQUEST });
    const response = await request.get(getContactsUrl(), { page: 1 });
    if (response.ok) {
      const normalData = response.data.data.map((item) => ({
        ...item,
        image: Object.values(item.medias)[0],
      }));
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: normalData,
      });
    } else {
      dispatch({ type: GET_CONTACTS_ERROR });
    }
  };
};

export const sendTicket = async (data) => {
  message.loading({ content: 'please wait ...', key: SEND_TICKET_KEY });
  const response = await request.post(sendTicketUrl(), data);
  if (response.ok) {
    message.success({ content: 'Successful request', key: SEND_TICKET_KEY });
  } else {
    message.error({ content: 'Failed request', key: SEND_TICKET_KEY });
  }
};
