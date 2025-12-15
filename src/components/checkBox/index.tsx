import React from "react";
import CheckSvg from "svgs/check.svg";
import classnames from "classnames";
import CheckboxStyle from "./checkbox.style";

interface CheckBoxProps {
  checkUpdateHandler: () => void;
  active: boolean;
}

const CheckBox = ({ checkUpdateHandler, active }: CheckBoxProps) => {
  const classes = classnames("IN-checkbox", { active });
  return (
    <CheckboxStyle>
      <div className={classes}>
        <div
          className="checkbox-container"
          onClick={checkUpdateHandler}
          onKeyDown={() => null}
          role="checkbox"
          aria-label="activate option"
          aria-checked={false}
        >
          <CheckSvg />
        </div>
      </div>
    </CheckboxStyle>
  );
};

export default CheckBox;
