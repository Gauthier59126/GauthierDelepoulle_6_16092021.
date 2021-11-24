const trendingSort = (a, b) => b.likes - a.likes;

export const sortByTrending = (medias) => medias.sort(trendingSort);

const titleSort = (a, b) => {
  if (a.title <= b.title) {
    return -1;
  }
  return 1;
};

export const sortByTitle = (medias) => medias.sort(titleSort);

const dateSort = (a, b) => {
  if (a.date <= b.date) {
    return -1;
  }
  return 1;
};

export const sortByDate = (medias) => medias.sort(dateSort);
