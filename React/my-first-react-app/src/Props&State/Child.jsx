import React, { Fragment, useState } from "react";

function Child(props) {
  // Accessing props
  const messageNumber = props.messageNumber;
  const messageProperties = props.messageProperties;
  const messagePropertieskeys = Object.keys(messageProperties);

  // State using useState hook
  const [name, setName] = useState("Default name");
  const [count, setCount] = useState(0);

  const handleChangeNameButtonClick = () => {
    setName("Shivam Prajapati");
  };

  const handleIncrement = () => {
    let newCount = count;
    newCount = newCount + 1;
    setCount(newCount);
  };

  const handleDecrement = () => {
    let newCount = count;
    newCount = newCount - 1;
    if (newCount >= 0) {
      setCount(newCount);
    }
  };

  const isDecrementDisabled = count === 0;

  return (
    <Fragment>
      <h1>Child component starts here!</h1>

      <h6>Demonstrating State</h6>
      <p>Name is: {name}</p>
      <button onClick={handleChangeNameButtonClick}>Change Name</button>

      <p>Count is: {count}</p>
      <button onClick={handleDecrement} disabled={isDecrementDisabled}>
        Decrement/-
      </button>
      <button onClick={handleIncrement}>Increment/+</button>

      <h6>Demonstrating Props</h6>
      <p>Message: {props.message}</p>
      <p>Message number is: {messageNumber}</p>
      <div>
        {messagePropertieskeys.map((key) => {
          return (
            <p>
              {key}: {messageProperties[key]}
            </p>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Child;
