export const useScroll = () => {
  const [state, setState] = useState({});
  const handleScroll = (event) => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ...state };
};
