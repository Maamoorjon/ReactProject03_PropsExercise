import "./Component.css";

const Component = ({
  name = "Ma'murjon",
  age = "43",
  country = "Uzbekistan",
  color = "green"
}) => {
  return (
    <div className={`component ${color}`}>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>From: {country}</h3>
    </div>
  );
};

export default Component;
