export const useNetwork = (callback) => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => {
      if (typeof callback === "function") {
        callback(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);
  return status;
};
