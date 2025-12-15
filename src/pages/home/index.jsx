import React from "react";
import TextBox from "components/textBox";
import Button from "components/button/index.tsx";
import CheckBox from "components/checkBox/index.tsx";
import InsuranceLoader from "components/loader";
import { Redirect } from "react-router-dom";
import {
  handleFormSubmit,
  checkBoxLogicHandler,
  ReroutingLogicHandler,
  LoadingLogicHandler,
} from "./home.logic";
import HomePageStyle from "./homePage.style";

const HomePage = () => {
  const { checked, handleCheckUpdate } = checkBoxLogicHandler();
  const { handleRedirect, route: redirect } = ReroutingLogicHandler();
  const { isLoading } = LoadingLogicHandler();
  return (
    <HomePageStyle>
      <div className="IN-Home-content">
        <div className="IN-Home-graphics">
          <figure>
            <img
              src="https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="insurance"
            />
          </figure>
        </div>
        <div className="IN-Home-form">
          <header>
            <h1>We have a nice form!</h1>
            <h4>Rest assured. its 100% transparent</h4>
          </header>
          <div className="form-wrapper">
            <form onSubmit={handleFormSubmit}>
              <TextBox
                labelText="Your car registration number"
                name="regNo"
                type="text"
                required
              />
              <TextBox labelText="NRIC/Passport number" name="icNo" required />
              <TextBox
                labelText="Postcode"
                name="postCode"
                type="number"
                required
              />
              <div className="confirm-accuracy">
                <CheckBox
                  checkUpdateHandler={() => handleCheckUpdate(checked)}
                  active={checked}
                />
                Is this a reconditioned car?
              </div>
              <Button disabled={checked} onClick={() => handleRedirect(true)}>
                {isLoading ? <InsuranceLoader /> : "Get Quotation"}
              </Button>
              {redirect && (
                <Redirect
                  to={{
                    pathname: "/car-info",
                    state: { dani: "dani", dan: "dan" },
                  }}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </HomePageStyle>
  );
};
export default HomePage;
