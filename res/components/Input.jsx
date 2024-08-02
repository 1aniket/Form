import { useState } from "react";
import "./Input.css";

const Input = ({ title, type = "text", onChange, val, name ,required=false}) => {
  return (
    <div className="input-container">
      <div className="input-title">
        <h6>{title}</h6>
      </div>
      <div className="input-feild">
        <input
          name={name}
          placeholder={title}
          type={type}
          value={val}
          onChange={(e)=>{onChange(e)}}
          required={required}
        />
        <div className="error">
        <h6>{title} cannot be empty</h6>
        </div>
      </div>
    </div>
  );
};

export default Input;
