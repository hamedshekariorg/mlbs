import { SHOW_MODAL } from './modal.constant';

export const showModalAction = (modals) => ({
  type: SHOW_MODAL,
  payload: modals,
});
