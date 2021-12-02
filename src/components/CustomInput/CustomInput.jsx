// @ts-check
import React from "react";

/**
 * @typedef {Object} CustomInputProps - props
 * @property {string|number} value - InputValue
 * @property {(params: { value: string | number }) => void} onChange - onChange_CB
 * @property {string} type - Type_Input
 */

/**
 * @param {CustomInputProps} props
 * @returns {JSX.Element}
 */

export const CustomInput = (props) => {
  const { value, onChange, type } = props;

  let inputType = type;

  if (!inputType) {
    inputType = "text";
  }

  const onChangeInput = (event) => {
    let value =
      inputType === "number" ? Number(event.target.value) : event.target.value;

    onChange({
      value,
    });
  };

  return (
    <>
      <input type={inputType} value={value} onChange={onChangeInput} />
    </>
  );
};
