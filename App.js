import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "I'm an h1 tag.");

console.log(heading);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(Render)
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX!
  </h1>
);

console.log(jsxHeading);

const spanElement = <span>This is a span element. Inside Heading2.</span>;

// React Element
const heading2 = (
  <h1 className="heading" tabIndex="5">
    {spanElement}
    Namaste React using JSX!
  </h1>
);

// ! React Function Component
// Both are same
// const fn = () => true;

// const fn2 = () => {
//   return true;
// };

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

// component composition
const HeadingComponent2 = () => (
  <div className="container">
    {Title()}
    <Title />
    {heading2}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
