import * as React from "react";
import classnames from "classnames";
import CardRadioStyle from "./index.style";

interface CardRadioProps {
  children: React.ReactNode;
  title: string;
  id: string;
  onClick: () => void;
  active: boolean;
  order: number;
}

const CardRadio = ({
  children,
  id,
  title,
  active,
  onClick,
  order,
}: CardRadioProps) => {
  const classes = classnames("circles", { active });
  return (
    <CardRadioStyle>
      <div className="IN-radioCard IN-card-element">
        <div className="titles">
          <div
            className={classes}
            onClick={onClick}
            id={id}
            role="checkbox"
            onKeyDown={() => null}
            aria-label="activate option"
            tabIndex={order}
            aria-checked={false}
          />
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </CardRadioStyle>
  );
};

export default CardRadio;
