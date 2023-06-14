import logo from "./logo.svg";
import "./App.css";

function DisplayTitle(props) {
  const myName = "Praneeth";
  let display = myName ? myName : "hello friend";
  console.log(props, "props");
  const { name, age, fav, crazy } = props;

  return (
    <div className="App">
      <h1>hello {name} </h1>
      <h3>my age is {age}</h3>
      {crazy ? <h1>crazy true</h1> : <h1>crazy false</h1>}
    </div>
  );
}

export default DisplayTitle;
