import React, { useEffect, useContext, useCallback } from "react";
import * as keypress from "keypress.js";
import PropTypes from "prop-types";
import { GlobalContext } from "../GlobalContext";

function KeyboardShortcut({ combos, description, callback, children }) {
  let newCallback = useCallback(
    () => callback(description),
    [description, callback]
  );

  const { addItems } = useContext(GlobalContext);

  useEffect(() => {
    let listener = new keypress.Listener();
    listener.simple_combo(combos, function () {
      newCallback();
    });
    addItems({ combos, description });

    return () => listener.unregister_combo(combos);
  }, [combos, description, callback]);
  return <>{children}</>;
}

KeyboardShortcut.propTypes = {
  combos: PropTypes.string,
  description: PropTypes.string,
  callback: PropTypes.func,
};

export default KeyboardShortcut;
