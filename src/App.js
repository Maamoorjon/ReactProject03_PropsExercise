import Component from "./components/Component";

export default function App() {
  const profile = [
    { name: "Takeshi", age: 20, country: "Japan", color: "red" },
    { name: "Jane", age: 25, country: "UK", color: "" }
  ];
  return (
    <>
      <Component
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
        color={profile[0].color}
      />
      <Component {...profile[1]} />
      <Component />
    </>
  );
}
