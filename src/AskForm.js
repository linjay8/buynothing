import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Confirmation from "./GiftConfirmation";

export default function AskForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [pickup, setPickup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleItemChange(event) {
    setItem(event.target.value);
  }
  function handleTypeChange(event) {
    setType(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handlePickupChange(event) {
    setPickup(event.target.checked);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  function clearAll() {
    setName("");
    setEmail("");
    setItem("");
    setType("");
    setDescription("");
    setPickup(false);
    setSubmitted(false);
  }
  return (
    <div className="container">
      {submitted ? (
        <Confirmation
          name={name}
          email={email}
          item={item}
          type={type}
          description={description}
          pickup={pickup}
        />
      ) : (
        <form onSubmit={handleSubmit} className="row g-3">
          <h1 className="text-center mt-4">Ask</h1>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="inputItem" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputItem"
              placeholder="Gray T-shirt"
              value={item}
              onChange={handleItemChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputType" className="form-label">
              Item Type
            </label>
            <select
              id="inputType"
              className="form-select"
              value={type}
              onChange={handleTypeChange}
            >
              <option>--Select one--</option>
              <option>Clothing</option>
              <option>Furniture</option>
              <option>Food</option>
              <option>Miscellaneous</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputDescription" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="inputDescription"
              onChange={handleDescriptionChange}
              value={description}
            ></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                checked={pickup}
                onChange={handlePickupChange}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Pickup only?
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary me-3 ">
              Donate
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
