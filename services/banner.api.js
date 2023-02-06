import request from './request';

export const getBannerUrl = (type) => `/banners?type=${type}`;

export const getBanner = async (type) => {
  const response = await request.get(getBannerUrl(type));

  if (response.ok) {
    return response.data?.data;
  }

  return null;
};
