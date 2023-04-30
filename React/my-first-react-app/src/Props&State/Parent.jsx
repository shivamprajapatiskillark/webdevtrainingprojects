import React, { Fragment } from "react";
import Child from "./Child";
import "./Parent.css";
//  Functional Component
function Parent() {
  return (
    <div className="parentRoot">
      <h1>This is the parent component</h1>
      <Child
        message="This is the message received from Parent file"
        messageNumber={100}
        messageProperties={{
          sender: "Shivam Prajpati",
          reciever: "Prateek Jaiswal",
          startDate: "20-04-2023",
          endDate: "30-04-2023",
        }}
      />
    </div>
  );
}
// Named export - Name can not differ while importing
// export { Parent };
// Default export - We can import usign a different but correct path
export default Parent;
