import React, { useState } from "react";
import products from "./products";
import Card from "./cards";
import { Row } from "react-bootstrap";

function App() {
  // State to hold the user's first name
  const [firstName, setFirstName] = useState("");

  // State to track whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // State to track whether the user has skipped
  const [skipped, setSkipped] = useState(false);

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setFirstName(e.target.value); // Update the firstName state with the value from the input field
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (firstName.trim() !== "") {
      // Check if the input is not empty
      setSubmitted(true); // Update state to indicate that the form has been submitted
    }
  };

  // Function to handle the skip action
  const handleSkip = () => {
    setSkipped(true); // Update state to indicate that the user has skipped
    setSubmitted(true); // Optionally, mark the form as submitted to show the product list
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container with Tailwind CSS classes for centering */}
      <div className="text-center p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
        {/* Conditional rendering based on whether the form has been submitted or the user has skipped */}
        {!submitted && !skipped ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h1
                style={{
                  backgroundColor: "palegreen",
                  borderRadius: "150px5px",
                }}
              >
                Enter your first name:
              </h1>
              <input
                style={{
                  borderRadius: "30px",
                  backgroundColor: "blue",
                  width: "250px",
                  height: "50px",
                }}
                type="text"
                value={firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="border border-gray-300 rounded-full px-4 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              style={{
                borderRadius: "30px",
                backgroundColor: "blueviolet",
                width: "150px",
                height: "50px",
              }}
            >
              Say Hi
            </button>
            <button
              type="button"
              onClick={handleSkip}
              style={{
                borderRadius: "30px",
                backgroundColor: "red",
                width: "50px",
                height: "50px",
              }}
            >
              Skip
            </button>
          </form>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Hi, {!skipped ? firstName : "there"}!
            </h1>
            <Row className="flex flex-wrap justify-center">
              {products.map((product) => (
                <Card
                  key={product.id}
                  {...product}
                  userName={!skipped ? firstName : "there"}
                />
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
