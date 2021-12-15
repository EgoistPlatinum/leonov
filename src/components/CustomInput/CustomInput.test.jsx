import React from "react";
import { act, getByRole, getByTestId, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomInputBlocks, CustomInput } from "./CustomInput";
import TestRenderer from "react-test-renderer";

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

test("clickCloseButton", () => {
  /** @type {(value: string) => void} */
  let setValueFromHook;

  const onChange = jest.fn(({ value }) => {
    setValueFromHook(value);
  });

  const TestWrapper = () => {
    const [value, setValue] = React.useState("string");
    setValueFromHook = setValue;

    return <CustomInput value={value} onChange={onChange} />;
  };
  const renderResult = render(<TestWrapper />);
  const el = getByTestId(renderResult.container, "close");

  act(() => {
    userEvent.click(el);
  });

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenNthCalledWith(1, { value: "" });
});

test("numInput", () => {
  /** @type {(value: number) => void} */
  let setValueFromHook;

  const onChange = jest.fn(({ value }) => {
    setValueFromHook(value);
  });

  const TestWrapper = () => {
    const [value, setValue] = React.useState(0);
    setValueFromHook = setValue;

    return <CustomInput value={value} onChange={onChange} type="number" />;
  };
  const renderResult = render(<TestWrapper />);
  const el = getByRole(renderResult.container, "spinbutton");

  userEvent.type(el, "123");
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(onChange).toHaveBeenNthCalledWith(3, { value: 123 });
});

test("CloseButton", () => {
  const closedButton = TestRenderer.create(
    <CustomInput value={""} onChange={() => {}} />
  );

  expect(
    closedButton.root.findAllByType(CustomInputBlocks.CloseButton).length
  ).toBe(0);
});

test("CloseButton", () => {
  const closedButton = TestRenderer.create(
    <CustomInput value={"string"} onChange={() => {}} />
  );

  expect(
    closedButton.root.findAllByType(CustomInputBlocks.CloseButton).length
  ).toBe(1);
});

test("autocompleteInput", () => {
  /** @type {(value: number) => void} */
  let setValueFromHook;

  const onChange = jest.fn(({ value }) => {
    setValueFromHook(value);
  });

  const TestWrapper = () => {
    const [value, setValue] = React.useState(0);
    setValueFromHook = setValue;

    return <CustomInput value={value} onChange={onChange} autoComplete="off" />;
  };
  const renderResult = render(<TestWrapper />);
  const el = getByRole(renderResult.container, "textbox");

  expect(el.getAttribute("autocomplete")).toBe("off");
});
