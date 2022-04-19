import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

function KeyboardShortcutCountHoc(Component) {
  return function WihKeyboardShortcutComponent({ ...props }) {
    const { activeItems } = useContext(GlobalContext);
    return (
      <>
        <Component {...props} activeItems={activeItems} />
      </>
    );
  };
}

export default KeyboardShortcutCountHoc;
