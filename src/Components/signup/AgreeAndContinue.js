import React from "react";
import { useHistory } from "react-router-dom";

function AgreeAndContinue() {
  const history = useHistory();
  return (
    <>
      {/* submit Form */}
      <span>
        By selecting Agree and continue below, I agree to Airbnb’s
        <a href="#">Terms of Service</a> ,
        <a href="#">Payments Terms of Service</a> ,{" "}
        <a href="#">Privacy Policy</a>, and{" "}
        <a href="#">Nondiscrimination Policy</a>.
      </span>
      <br />
      <input
        type="submit"
        className="agree-btn"
        value="Agree and continue"
        name="submit-btn"
        onClick={() => {
          console.log(history);
          if (history.location.pathname === "/become_host") {
           return history.push("/collect_data");
          } else {
          //  return history.push("/");
          //send data to api as  a reguler user 
          return window.location.reload(false);
          }
        }}
      />
      <span>
        Airbnb will send you members-only deals, inspiration, marketing emails,
        and push notifications. You can opt out of receiving these at any time
        in your account settings or directly from the marketing notification.
      </span>
      <br />
      <div className="send-reminder">
        <input type="checkbox" name="keep_contact" id="checkBox" />
        <label htmlFor="checkBox">
          I don’t want to receive marketing messages from Airbnb.
        </label>
      </div>
    </>
  );
}

export default AgreeAndContinue;
