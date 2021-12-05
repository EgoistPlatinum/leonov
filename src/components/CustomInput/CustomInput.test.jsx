import React from "react";
import { getByRole, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomInput } from "./CustomInput";

test("textInput", () => {
  const onChange = jest.fn();
  const renderResult = render(<CustomInput onChange={onChange} value="" />);
  const el = getByRole(renderResult.container, "textbox");

  userEvent.type(el, "anyway");
  expect(onChange).toHaveBeenCalledTimes(6);
  expect(onChange).toHaveBeenNthCalledWith(1, { value: "w" });
  expect(onChange).toHaveBeenNthCalledWith(5, { value: "anywa" });
  expect(onChange).toHaveBeenNthCalledWith(6, { value: "anyway" });
});
