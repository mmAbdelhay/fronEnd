import React from "react";

export default function Input(props) {
  const changeHandler = (event) => {
    props.onInputChange(event.target.value);
  };
  return (
    <div className="form-group mt-3">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.label}
        onChange={changeHandler}
      />
    </div>
  );
}
