import React from "react";
import keyboardShortcutCountHoc from "./KeyboardShortcutCount";
import PropTypes from "prop-types";

function ActiveList({ activeItems }) {
  return (
    <div>
      {activeItems?.map((item) => (
        <div key={item.combos}>
          <span style={{ marginRight: 20 }}>
            {item.combos.split(" ").join("+")}:
          </span>
          <span>{item.description}</span>
          <br />
        </div>
      ))}
    </div>
  );
}
ActiveList.propTypes = {
  activeItems: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      combos: PropTypes.string,
    })
  ),
};
const ActiveListHoc = keyboardShortcutCountHoc(ActiveList);
export default ActiveListHoc;
