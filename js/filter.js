const processFilter = (photograph, tag) => photograph.tags.includes(tag);

const filterByTag = (allP, tag) => allP.filter((photograph) => processFilter(photograph, tag));

export default filterByTag;
