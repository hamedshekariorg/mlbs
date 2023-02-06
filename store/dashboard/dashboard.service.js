export const getMomentsUrl = () => 'moment/mine';
export const addMomentUrl = () => `moment/mine`;
export const editMomentUrl = (id) => `moment/mine/${id}`;
export const deleteMomentUrl = (id) => `moment/mine/${id}`;
export const deleteMomentMediaUrl = (momentId, mediaId) =>
  `moment/mine/${momentId}/media/${mediaId}`;
export const uploadImageUrl = (mediaId) => `moment/mine/${mediaId}/media`;
