import React from "react";
import "./Start.css";

function Start(props) {
  const inputRestaurants = ["First restaurant", "Second restaurant"];
  // const [customer, setCustomer] = useState({});

  return (
    <div className="row">
      <div className="rol-md-6 account">
        <form>
          <h1 className="h3 mb-3 fw-normal">Account Information</h1>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Charlie Parker"
              onInput={(e) => {
                props.setCustomer({
                  ...props.customer,
                  profileUsername: e.target.value,
                });
              }}
              required
            />
            <label for="Username">Username</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="Phone number"
              placeholder="1112223333"
              onInput={(e) => {
                props.setCustomer({
                  ...props.customer,
                  mobile: e.target.value,
                });
              }}
              required
            />
            <label for="Phone number">Phone number</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="Street 1"
              placeholder="1 Hacker Way"
              onInput={(e) => {
                props.setCustomer({ ...props.customer, line1: e.target.value });
              }}
              required
            />
            <label for="Street 1">Street 1</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="Street 2"
              placeholder="Suite 108"
              onInput={(e) => {
                props.setCustomer({ ...props.customer, line2: e.target.value });
              }}
              required
            />
            <label for="Street 2">Street 2</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="City"
              placeholder="Atlanta"
              onInput={(e) => {
                props.setCustomer({ ...props.customer, city: e.target.value });
              }}
              required
            />
            <label for="City">City</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="State"
              placeholder="GA"
              onInput={(e) => {
                props.setCustomer({ ...props.customer, state: e.target.value });
              }}
              required
            />
            <label for="State">State</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              id="Postal Code"
              placeholder="30308"
              onInput={(e) => {
                props.setCustomer({
                  ...props.customer,
                  postalCode: e.target.value,
                });
              }}
              required
            />
            <label for="Postal Code">Postal Code</label>
          </div>
        </form>
      </div>
      <div className="rol-md-6 food">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="h3 mb-3 fw-normal">Food </h1>

          <div className="form-floating right">
            <input
              type="text"
              className="form-control"
              id={inputRestaurants[0]}
              placeholder="_"
              value={props.keywords[0]}
              onInput={(e) => {
                props.onKeywordInput([e.target.value, props.keywords[1]]);
              }}
            />
            <label for={inputRestaurants[0]}>{inputRestaurants[0]}</label>
          </div>
          <div className="form-floating right">
            <input
              type="text"
              className="form-control"
              id={inputRestaurants[1]}
              placeholder="_"
              value={props.keywords[1]}
              onInput={(e) => {
                props.onKeywordInput([props.keywords[0], e.target.value]);
              }}
            />
            <label for={inputRestaurants[1]}>{inputRestaurants[1]}</label>
          </div>

          {/* <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={props.onSubmit}
          >
            Go!
          </button>
          {/* <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p> */}
        </form>
      </div>
    </div>
  );
}

export default Start;