export const beforeLeave = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  useEffect(() => {
    const onMouseLeave = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        callback();
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [callback]);
};
