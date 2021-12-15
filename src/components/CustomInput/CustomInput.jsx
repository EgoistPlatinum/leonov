// @ts-check
import React from "react";
import { CloseIcon, Icon } from "fronton-react";
import "./CustomInput.css";

// Набор объектов используемые внутри основного компонента

/**
 *
 * @typedef {Object} CloseButtonProps - props
 * @property {() => void} onClick - onClickCb
 */

export const CustomInputBlocks = {
  /**
   * @param {CloseButtonProps} props
   * @returns {JSX.Element}
   */
  CloseButton: (props) => {
    const { onClick } = props;

    return (
      <button
        className="btn"
        data-testid={"close"}
        type="button"
        onClick={onClick}
      >
        <Icon size="space-250" color="text-primary">
          <CloseIcon />
        </Icon>
      </button>
    );
  },
};

/**
 * @typedef {Object} CustomInputProps - props
 * @property {string|number} value - InputValue
 * @property {(params: { value: string | number }) => void} onChange - onChange_CB
 * @property {string=} type - Type_Input
 */

/**
 * @param {CustomInputProps} props
 * @returns {JSX.Element}
 */
export const CustomInput = (props) => {
  const { value, onChange, type, ...htmlAttrs } = props;

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

  const onClickCb = React.useCallback(() => {
    onChange({ value: "" });
  }, []);

  return (
    <>
      <form action="" className="form1">
        <input
          type={inputType}
          value={value}
          onChange={onChangeInput}
          className="input1"
          {...htmlAttrs}
        />

        {value === "" ? null : (
          <CustomInputBlocks.CloseButton onClick={onClickCb} />
        )}

        {/*<div className="main-block">*/}
        {/*    <input type={inputType} value={value} onChange={onChangeInput}  className="input2" />*/}
        {/*    <Icon size="space-250" color="text-primary" className="input-icon">*/}
        {/*        <CloseIcon />*/}
        {/*    </Icon>*/}
        {/*</div>*/}
      </form>
    </>
  );
};
