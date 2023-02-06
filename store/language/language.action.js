import { SET_LANGUAGE, CHANGE_LANGUAGE } from './language.constant';

export const setLanguageAction = (data) => ({
  type: SET_LANGUAGE,
  payload: data,
});

export const changeLanguageAction = (data) => {
  const languageData = data === 'en' ? 'en' : 'cn';
  setLanguageAction(languageData);
  return {
    type: CHANGE_LANGUAGE,
    payload: data,
  };
};
