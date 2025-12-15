import React, { useState } from "react";
import TextBox from "components/textBox";
import SelectInput from "components/select";
import Button from "components/button/index.tsx";
import TextArea from "components/textArea";
import Toggle from "components/toggle";
import Card from "components/card/index.tsx";
import CardRadio from "components/cardRadio/index.tsx";
import selectOptions from "./options.json";
import TestPageStyles from "./index.style";

const TestPage = () => {
  const [state, setState] = useState({
    isToggled: false,
    options: selectOptions,
    selected: null,
    circle: false,
  });
  const { isToggled, options, circle } = state;
  const handleToggle = () => {
    setState({
      ...state,
      isToggled: !isToggled,
    });
  };
  const handleSelect = (option) => {
    setState({
      ...state,
      selected: option?.value,
    });
  };
  const handleActiveCircle = () => {
    setState({
      ...state,
      circle: !circle,
    });
  };
  return (
    <>
      <TestPageStyles>
        <div className="container">
          <Card recommended={isToggled}>
            <article>
              <h1>
                this is the insurance product stuff, this is a webpack react
                test
              </h1>
            </article>
            <SelectInput
              options={options ?? []}
              onChange={handleSelect}
              name="insurance options"
              label="insurance options"
              placeHolder="insurance stuff"
            />
            <div className="form">
              <TextBox
                labelText="dani test"
                required
                name="danitest"
                error="Error, please fix the mistakes"
              />
              <TextBox labelText="dani test" required name="danitest1" />
            </div>
            <div className="form">
              <TextArea
                disabled={false}
                name="insurance test"
                label="something"
              />
            </div>
            <div className="form toggle">
              <Toggle
                name="insurance"
                checked={isToggled}
                onChange={(res) => handleToggle(res)}
              />
            </div>
            <div className="form">
              <Button>next</Button>
            </div>
          </Card>
          <CardRadio
            title="an interesting title"
            id="TPFT"
            onClick={handleActiveCircle}
            active={circle}
            order={7}
          >
            <h1>description: </h1>
          </CardRadio>
        </div>
      </TestPageStyles>
    </>
  );
};

export default TestPage;
