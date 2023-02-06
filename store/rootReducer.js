import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

// reducers
import languageReducer from './language/language.reducer';
import modalReducer from 'store/modal/modal.reducer';
import authReducer from 'store/auth/auth.reducer';
import attractionsReducer from 'store/attractions/attractions.reducer';
import categoriesReducer from 'store/categories/categories.reducer';
import seasonsReducer from 'store/seasons/seasons.reducer';
import commentsReducer from 'store/comments/comments.reducer';
import bannersReducer from 'store/banners/banners.reducer';
import flightReducer from 'store/flights/flights.reducer';
import aboutUsReducer from './aboutUs/aboutUs.reducer';
import contactUsReducer from 'store/contactUs/contactUs.reducer';
import faqReducer from 'store/faq/faq.reducer';
import customTourPackageReducer from 'store/customTourPackage/customTourPackage.reducer';
import tourPackageReducer from 'store/tourPackage/tourPackage.reducer';
import policyReducer from './policy/policy.reducer';
import postsReducer from 'store/posts/posts.reducer';
import dashboardReducer from 'store/dashboard/dashboard.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  loadingBar: loadingBarReducer,
  language: languageReducer,
  attractions: attractionsReducer,
  modal: modalReducer,
  categories: categoriesReducer,
  seasons: seasonsReducer,
  comments: commentsReducer,
  banners: bannersReducer,
  flights: flightReducer,
  aboutUs: aboutUsReducer,
  contactUs: contactUsReducer,
  faq: faqReducer,
  customTourPackage: customTourPackageReducer,
  tourPackage: tourPackageReducer,
  policy: policyReducer,
  posts: postsReducer,
  dashboard: dashboardReducer,
});

export default (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined; // eslint-disable-line no-param-reassign
  }

  return appReducer(state, action);
};
