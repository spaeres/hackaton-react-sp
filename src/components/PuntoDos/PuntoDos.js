import "./ProgressBarComponent.css";
import React, { useState } from "react";
import { ProgressBar, Form } from "react-bootstrap";

function ProgressBarComponent() {
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (e) => {
    const value = Math.min(Math.max(0, e.target.value), 100);
    setPercentage(value);
  };

  return (
    <div className="container-box">
      <div className="content-box">
        <ProgressBar
          now={percentage || 0}
          label={`${percentage || 0}%`}
          className={percentage > 0 ? "custom-progress-bar" : ""}
          style={{
            borderRadius: "25px",
            backgroundColor: percentage === 0 ? "#d3d3d3" : "",
          }}
        />
        <div className="mt-2" style={{ color: "white" }}>
          {percentage || 0}%
        </div>
        <Form.Group className="mt-3 d-flex align-items-center justify-content-center">
          <p className="mb-0 me-2">Input Percentage</p>
          <Form.Control
            type="number"
            value={percentage}
            placeholder="Enter percentage"
            onChange={handleInputChange}
            min={0}
            max={100}
            style={{ width: "100px" }}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default ProgressBarComponent;
