export const getExceptionalAdventuresUrl = () => '/'; // static for now
export const getUnescoUrl = () => '/attractions'; // static for now
export const getPopularAttractionsUrl = () => '/attractions';
export const getAllAttractionsUrl = () => '/attractions';

export const getAttractionsUrl = (id) => `/attractions/${id}`;

export const getAttractionListsRoute = () => '/attractions/list/';
export const getAttractionDetailRoute = (id) =>
  `/attractions/details/?id=${id}`;
export const getAttractionEditRoute = (id) => `/attractions/edit/?id=${id}`;
export const getEditAttractionUrl = () => `/attractions/offers/mine`;
export const getSeasonAttractionsUrl = () => '/attractions';
