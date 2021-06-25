import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import env from "react-dotenv";
const REACT_APP_STRIPE_KEY =
  "pk_test_51J64LlCQovXg1ThzrnIUJstja2kUr5FIVV9q6hhpkmzUom7kKxpHK1RbJCpIeleiHQeAgJTFiCLc4Q75ytbis9m000BtoMDi5j";

class Payments extends Component {
  render() {
    console.log("GGGGGGGGGGGGGGGGGGGGGGGGGG", env.stripePublishableKey);
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={REACT_APP_STRIPE_KEY}
        //stripeKey={env.REACT_APP_STRIPE_KEY}
        //stripeKey={window.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits...</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
