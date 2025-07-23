import React from "react";
import { createRoot } from "react-dom/client";

// JSX
// const parent = (
//   <h1 className="heading" tabIndex={1}>
//     Hello from JSX and React
//   </h1>
// );

const number  = 1000;
const greet = () => {
  console.log("Hello React")
}
// Title Component
const Title = () => {
  return <h1 className="head">This is the Title of App🚀</h1>;
};
// heading Component
const HeadingComponent = () => {
  return (
    <>
    {/* component composition */}
      <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component, {number} {greet()}</h1>
      </div>
    </>
  );
};

// const HeadingComponent = () => (
//   <h1>Namaste React Functional Component</h1>
// );
const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
