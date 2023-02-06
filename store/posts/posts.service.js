export const getPostsUrl = () => '/posts';
export const getPostDetailsUrl = (id) => `posts/${id}`;

export const getPostDeatailRoute = (id, tag) =>
  `/posts/details/?optins=${id}/${tag}`;
