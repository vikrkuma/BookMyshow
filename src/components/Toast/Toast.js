import React from "react";
import "./Toast.css";

function Toast({ message }) {
  return message ? <div className="ToastWrapper">{message}</div> : null;
}

Toast.defaultProps = {
  message: ""
};

export default Toast;
