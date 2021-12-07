import React from "react";
import { getByRole, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomInput } from "./CustomInput";

test("textInput", () => {
  /** @type {(value: string) => void} */
  let setValueFromHook;

  const onChange = jest.fn(({ value }) => {
    setValueFromHook(value);
  });

  const TestWrapper = () => {
    const [value, setValue] = React.useState("");
    setValueFromHook = setValue;

    return <CustomInput value={value} onChange={onChange} />;
  };
  const renderResult = render(<TestWrapper />);
  const el = getByRole(renderResult.container, "textbox");

  userEvent.type(el, "anyway");
  expect(onChange).toHaveBeenCalledTimes(6);
  expect(onChange).toHaveBeenNthCalledWith(1, { value: "a" });
  expect(onChange).toHaveBeenNthCalledWith(5, { value: "anywa" });
  expect(onChange).toHaveBeenNthCalledWith(6, { value: "anyway" });
});
