export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "Are you sure you want to exit?";
  };
  const protect = () => {
    window.addEventListener("beforeunload", listener);
  };
  const unProtect = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return [protect, unProtect];
};
