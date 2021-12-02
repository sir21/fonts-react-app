import { useEffect, useState } from "react";

function keyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(!keyPressed);
    }
  }

  function upHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
}

export default keyPress;