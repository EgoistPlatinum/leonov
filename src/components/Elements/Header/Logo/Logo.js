import React from "react";
import { Component } from "react";
import LogoSmall from "../../../../images/Logo1.svg";

class LogoSm extends Component {
    render() {
        return <img src={LogoSmall} alt={"logo"} width={115} height={50} style={{display: "block"}} />;
    }
}

export default LogoSm;