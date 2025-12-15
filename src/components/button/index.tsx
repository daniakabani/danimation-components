import * as React from "react";
import classes from "classnames";
import ButtonStyles from "./button.style";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ onClick, disabled = false, children }: ButtonProps) => {
  const clickHandler = () => typeof onClick === "function" && onClick();
  const classNames = classes("in-button", {
    disabled,
  });

  return (
    <ButtonStyles>
      <div className={classNames}>
        <button disabled={disabled} type="button" onClick={clickHandler}>
          {children}
        </button>
      </div>
    </ButtonStyles>
  );
};

export default Button;
