import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-sm btn-outline-primary float-end mt-3">
      {props.text}
    </button>
  );
}
