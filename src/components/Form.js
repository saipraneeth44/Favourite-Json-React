import { useState } from "react";

function Form() {
  const initialValue = { name: "", email: "", password: "" };

  const [formData, setFormData] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefult();
    console.log(JSON.stringify(formData, undefined, 2));
    alert(JSON.stringify(formData, undefined, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      ></input>
      <br></br>
      <label>E-Mail</label>
      <input
        type="text"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      ></input>
      <br></br>
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      ></input>
      <br></br>
      <button type="Submit">Submit</button>
      <p>{JSON.stringify(formData)}</p>
    </form>
  );
}

export default Form;
