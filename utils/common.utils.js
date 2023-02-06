import { minioClient } from 'pages/_app';
import { formatDistanceToNow } from 'date-fns';
export const generateImageURL = async (media) => {
  if (!Array.isArray(media)) {
    const { bucket, path } = Object.values(media)[0];
    return await minioClient.presignedUrl(
      'GET',
      bucket || 'stage-mlbs',
      path,
      24 * 60 * 60,
    );
  }
};

export const normalizeCountries = (countries) =>
  countries?.entities?.map((item) => {
    const icon = Object.values(item.flag)[0];
    return {
      value: item.code,
      label: item.code,
      icon,
    };
  });

export const normalizeCountryNames = (countries) =>
  countries.entities.map(({ id, name, flag }) => {
    const icon = Object.values(flag)[0];
    return {
      id: id,
      value: name,
      icon,
    };
  });

// return retrieved states in a specific format
export const normalizeStates = (states) =>
  states.map(({ id, name }) => ({
    id: id,
    value: name,
    label: name,
  }));

// return retrieved cities in a specific format
export const normalizeCities = (cities) =>
  cities.map(({ id, name }) => ({
    id: id,
    value: name,
    label: name,
  }));

// convert date to string
export const timeAgo = (date) =>
  formatDistanceToNow(new Date(date), {
    includeSeconds: true,
    addSuffix: true,
  });

//add timeAgo item to comment list and extract image from objects
export const normalizeComments = (comments) =>
  comments.map((comment) => ({
    ...comment,
    timeAgo: timeAgo(comment.created_at),
    user_info: {
      ...comment.user_info,
      image: comment.user_info.image
        ? Object.values(comment.user_info.image)[0]
        : null,
    },
  }));

export const convertToArray = (obj) => {
  return obj && Object.keys(obj).map((keyName) => obj[keyName]);
};

// find the month's name based on retrieving number
// type: a string which specifies the type of the returning month => short | long
export const toMonthName = (monthNumber, type) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: type,
  });
};

export const isIdentifierValid = (type, value) => {
  if (type === 'phone') {
    return !!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
      value,
    );
  } else {
    return !!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  }
};

export const commentErrors = {
  name: [
    {
      required: true,
      message: 'Please input your name!',
    },
  ],
  email: [
    {
      type: 'email',
      message: 'The input is not valid E-mail!',
    },
    {
      required: true,
      message: 'Please input your E-mail address!',
    },
  ],
  review: [{ required: true, message: 'Please input your review!' }],
};

// file reading
export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const carouselSettings = {
  loop: true,
  autoplay: true,
  autoplayDelay: 3000,
  slidesPerView: 3,
  grabCursor: true,
  effect: 'coverflow',
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 1,
    scale: 0.9,
    slideShadows: false,
  },
};

export const extractionMedias = (data) =>
  data?.map(({ medias, ...items }) => ({
    ...items,
    image: Object.values(medias)[0],
  }));
