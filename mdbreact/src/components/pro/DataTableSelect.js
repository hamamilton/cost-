import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";
import SelectInput from "./SelectInput";
import SelectOptions from "./SelectOptions";
import SelectOption from "./SelectOption";

const DataTableSelect = ({ value, onChange, entries, label }) => (
  <div className="dataTables_length d-flex flex-row">
    <label className="mt-4">{label}</label>
    <Select getValue={onChange}>
      <SelectInput selected={value} />
      <SelectOptions>
        {entries.map((entry, index) => (
          <SelectOption checked={index === 0} key={entry} value={entry}>
            {entry}
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  </div>
);

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
