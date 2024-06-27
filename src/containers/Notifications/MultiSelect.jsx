import React, { useState, useRef } from "react";
import Select, { components } from "react-select";

const MultiSelect = (props) => { const apiUrl = process.env.REACT_APP_API_URL;
  const [selectInput, setSelectInput] = useState("");
  const isAllSelected = useRef(false);
  const selectAllLabel = useRef("Select all");
  const allOption = { value: "*", label: selectAllLabel.current };

  const filterOptions = (options, input) =>
    options?.filter(({ label }) => label && label.includes(input));

  const comparator = (v1, v2) => v1.value - v2.value;

  let filteredOptions = filterOptions(props.options, selectInput);
  let filteredSelectedOptions = filterOptions(props.value, selectInput);

  const Option = (props) => (
    <components.Option {...props}>
      {props.value === "*" &&
      !isAllSelected.current &&
      filteredSelectedOptions?.length > 0 ? (
        <input
          key={props.value}
          type="checkbox"
          ref={(input) => {
            if (input) input.indeterminate = true;
          }}
        />
      ) : (
        <input
          key={props.value}
          type="checkbox"
          checked={props.isSelected || isAllSelected.current}
          onChange={() => {}}
        />
      )}
      <label style={{ marginLeft: "5px" }}>{props.label}</label>
    </components.Option>
  );

  const Input = (props) => (
    <>
      {selectInput.length === 0 ? (
        <components.Input autoFocus={props.selectProps.menuIsOpen} {...props}>
          {props.children}
        </components.Input>
      ) : (
        <div style={{ border: "1px dotted gray" }}>
          <components.Input autoFocus={props.selectProps.menuIsOpen} {...props}>
            {props.children}
          </components.Input>
        </div>
      )}
    </>
  );

  const customFilterOption = ({ value, label }, input) =>
    (label && label.includes(input)) ||
    (value !== "*" && label) ||
    (value === "*" && filteredOptions?.length > 0);

  const onInputChange = (inputValue, event) => {
    if (event.action === "input-change") setSelectInput(inputValue);
    else if (event.action === "menu-close" && selectInput !== "")
      setSelectInput("");
  };

  const onKeyDown = (e) => {
    if ((e.key === " " || e.key === "Enter") && !selectInput)
      e.preventDefault();
  };

  const handleChange = (selected) => {
    if (
      selected.length > 0 &&
      selected[selected.length - 1].value === allOption.value
    ) {
      const allOptionsSelected =
        filteredOptions?.length === selected.length - 1;
      if (allOptionsSelected) {
        return props.onChange(props.options);
      } else {
        const newSelected = props.options.filter((option) =>
          filteredOptions.some((filtered) => filtered.value === option.value)
        );
        return props.onChange(newSelected);
      }
    } else {
      return props.onChange(selected);
    }
  };

  const customStyles = {
    multiValueLabel: (def) => ({
      ...def,
      backgroundColor: "lightgray",
    }),
    multiValueRemove: (def) => ({
      ...def,
      backgroundColor: "lightgray",
    }),
    valueContainer: (base) => ({
      ...base,
      width: "100%", // Set width to 100% for full width
      height: "55px", // Set height to 55px (adjust as needed)
      borderRadius: '20px !important',
      overflow: "auto",
    }),
    option: (styles, { isSelected, isFocused }) => {
      return {
        ...styles,
        backgroundColor:
          isSelected && !isFocused
            ? null
            : isFocused && !isSelected
            ? styles.backgroundColor
            : isFocused && isSelected
            ? "#DEEBFF"
            : null,
        color: isSelected || isFocused ? "blue" : "black", // Change text color to black when selected or focused
      };
    },
    menu: (def) => ({ ...def, zIndex: 9999 }),
  };

  if (props.isSelectAll && props.options.length !== 0) {
    isAllSelected.current =
      JSON.stringify(filteredSelectedOptions) ===
      JSON.stringify(filteredOptions);

    if (filteredSelectedOptions?.length > 0) {
      if (filteredSelectedOptions?.length === filteredOptions?.length)
        selectAllLabel.current = `All (${filteredOptions.length}) selected`;
      else
        selectAllLabel.current = `${filteredSelectedOptions?.length} / ${filteredOptions.length} selected`;
    } else selectAllLabel.current = "Select all";

    allOption.label = selectAllLabel.current;

    return (
      <Select
        {...props}
        inputValue={selectInput}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        options={[allOption, ...props.options]}
        onChange={handleChange}
        components={{
          Option: Option,
          Input: Input,
          ...props.components,
        }}
        filterOption={customFilterOption}
        menuPlacement={props.menuPlacement || "auto"}
        styles={customStyles}
        isMulti
        closeMenuOnSelect={false}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
        hideSelectedOptions={false}
        blurInputOnSelect={false}
      />
    );
  }

  return (
    <Select
      {...props}
      inputValue={selectInput}
      onInputChange={onInputChange}
      filterOption={customFilterOption}
      components={{
        Input: Input,
        ...props.components,
      }}
      menuPlacement={props.menuPlacement || "auto"}
      onKeyDown={onKeyDown}
      tabSelectsValue={false}
      hideSelectedOptions={true}
      backspaceRemovesValue={false}
      blurInputOnSelect={true}
    />
  );
};

export default MultiSelect;
