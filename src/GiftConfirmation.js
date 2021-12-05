import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default class Confirmation extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="text-center mt-4">Thanks {this.props.name}!</h2>
        <h5 className="text-center">Donation Details</h5>
        <p>City: {this.props.city}</p>
        <p>Item: {this.props.item}</p>
        <p>Type: {this.props.type}</p>
        <p>Description: {this.props.description}</p>
        <p>Pickup only: {this.props.pickup ? "Yes" : "No"}</p>
      </div>
    );
  }
}
