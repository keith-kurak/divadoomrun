"use dom";

export default function HelloDom(props: {
  name: string;
  dom?: import("expo/dom").DOMProps;
}) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
