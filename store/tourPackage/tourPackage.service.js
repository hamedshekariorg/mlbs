export const getTourPackageListUrl = () => '/services/tour/package';
export const getTourPackageUrl = (id) => `/services/tour/package/${id}`;
export const postTourPackageLikeUrl = (id, likeOrDislike) =>
  `/services/tour/package/customers/${id}/${likeOrDislike}`;
