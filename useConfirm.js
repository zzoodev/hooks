export const useConfirm = (message, onSuccess, onFail) => {
  if (typeof onSuccess !== "function") {
    return;
  }
  if (onFail && typeof onFail !== "function") {
    return;
  }
  const action = () => {
    if (window.confirm(message)) {
      onSuccess();
    } else {
      onFail();
    }
  };
  return action;
};
