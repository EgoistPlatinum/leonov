// @ts-check

import React from "react";

import { CustomInput } from "../../CustomInput/CustomInput";

const Header = () => {
  let initialState = sessionStorage.getItem("form_value");

  if (!initialState) {
    initialState = "";
  }

  const [value, setValue] = React.useState(initialState);

  React.useEffect(() => {
    sessionStorage.setItem("form_value", value);
  }, [value]);

  const onChange = React.useCallback(
    (event) => {
      console.log(typeof event.value);
      setValue(event.value);
    },
    [setValue]
  );

  return (
    <div>
      <CustomInput value={value} onChange={onChange} type="number" />
    </div>
  );
};

export default Header;
