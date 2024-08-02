import Input from "./Input";
import "./Form.css";
import Heading from "./Heading";
import Button from "./Button";
import { useState } from "react";
import Validator from "./Validator";
const Form = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    teamSize: "",
    location: "",
    message: "",
  };

  const [inputValues, setInputValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Validator(inputValues) == false) {
      return false;
    } else {
      alert(
        inputValues.firstName +
          "\n" +
          inputValues.lastName +
          "\n" +
          inputValues.email +
          "\n"+
          inputValues.location +
          "\n" +
          inputValues.teamSize +
          "\n" +
          inputValues.message
      );
      return true;
    }
  };

  return (
    <>
      <div className="form-container">
        <Heading text="React Form" />
        <form onSubmit={handleSubmit}>
          <div className="line">
            <Input
              title="First name"
              type="text"
              onChange={handleChange}
              val={inputValues.firstName}
              name="firstName"
              //required="true"
            />
            <Input
              title="Last name"
              type="text"
              onChange={handleChange}
              val={inputValues.lastName}
              name="lastName"
            />
          </div>
          <div className="line">
            <Input
              title="Email Address"
              type="email"
              onChange={handleChange}
              val={inputValues.email}
              name="email"
              //required="true"
            />
          </div>
          <div className="line">
            <Input
              title="Team Size"
              type="number"
              onChange={handleChange}
              val={inputValues.teamSize}
              name="teamSize"
            />
            <Input
              title="Location"
              type="address"
              onChange={handleChange}
              val={inputValues.location}
              name="location"
            />
          </div>
          <div className="line">
            <Input
              title="Message"
              type="textarea"
              onChange={handleChange}
              val={inputValues.message}
              name="message"
            />
          </div>
          <div className="line">
            <Button text="Send Message" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
