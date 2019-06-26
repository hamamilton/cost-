import React from "react";
import PropTypes from "prop-types";

const ControlledSelectInput = React.forwardRef(({ value, required }, inputRef) => (
  <input type="text" ref={inputRef}  required={required} defaultValue={value} className="select-dropdown" />
));

ControlledSelectInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string
}

ControlledSelectInput.defaultProps = {
  required: false
}

export default ControlledSelectInput;