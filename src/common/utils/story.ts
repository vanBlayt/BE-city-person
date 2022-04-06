export const mergeStory = (storyData) => {
  const insertData = {
    id: Date.now(),
    date: new Date(),
    comments: 0,
  };
  return Object.assign({}, insertData, storyData);
};
