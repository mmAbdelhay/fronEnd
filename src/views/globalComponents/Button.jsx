import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-sm btn-outline-dark float-end mt-2">
      {props.text}
    </button>
  );
}
