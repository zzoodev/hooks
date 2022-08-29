export const useInput = (init, validate) => {
  const [value, setValue] = useState(init);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let isUpdate = true;
    if (typeof validate === "function") {
      isUpdate = validate(value);
    }
    if (isUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
