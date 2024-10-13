import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md border-[2px] border-yellow-300 border-solid yellowShadow duration-200"
    >
      {text}
    </button>
  );
}
