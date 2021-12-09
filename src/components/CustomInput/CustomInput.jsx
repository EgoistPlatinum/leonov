// @ts-check
import React from "react";
import {CloseIcon, Icon} from "fronton-react";
import "./CustomInput.css"

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
    const {value, onChange, type} = props;

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
            <form action="" className="form1">
                <input type={inputType} value={value} onChange={onChangeInput} className="input1"/>
                <button className="btn">
                    <Icon size="space-250" color="text-primary" data-testid={'close'}>
                        <CloseIcon/>
                    </Icon>
                </button>
            </form>
        </>
    );
};
