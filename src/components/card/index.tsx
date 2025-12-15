import * as React from "react";
import classNames from "classnames";
import CardStyle from "./index.style";

interface CardProps {
  children: React.ReactNode;
  recommended: Boolean;
}

const Card = ({ children, recommended }: CardProps) => {
  const classes = classNames("IN-card", "IN-card-element", { recommended });
  return (
    <CardStyle>
      <div className={classes}>
        {recommended && <span className="recommendation">Recommended</span>}
        {children}
      </div>
    </CardStyle>
  );
};

export default Card;
