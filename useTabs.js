export const useTabs = (init, arr) => {
  const [index, setIndex] = useState(init);
  if (!arr || !Array.isArray(arr)) {
    return;
  }
  return { currentItem: arr[index], changeItem: setIndex };
};
