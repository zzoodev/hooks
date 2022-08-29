export const useFullScreen = () => {
  const element = useRef();

  const makeFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    if (element.current) {
      document.exitFullscreen();
    }
  };
  return { element, makeFull, exitFull };
};
