import { useState } from "react";
export default function TestiesForm() {
  // we need just ONE state with multiple propreties to represent the different inputs
  // we are writing our own formValues object here (before, we had the FormData object)
  const [formValues, setFormValues] = useState({
    username: "",
    testimonial: "",
  });

  //this function controls the onSubmiut event of the form
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
  }

  function handleInputChange(event) {
    // we are setting the formValues object to be a merge between the initial value of the formValues state, and the new values that the user is adding
    // we use event.target.name (name, as in, name attribute in the form) to be the key of the property and event.target.value to be the value (as in, the value attribute in the form) of the input
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  // I want to write a form with two inputs: username and testimonial
  return (
    // we add the handleSubmit function to the onSubmit event of the form
    <form onSubmit={handleSubmit}>
      <h2>Submit a Testimonial</h2>
      {/* Our classic "for="  */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        // we have updated the value bc username is now a property inside the formValues object
        value={formValues.username}
        placeholder="Write your name"
        required
        // we added the onChange event, so when the user types in the input, the handleUsernameChange function is called and updates the vale of the state
        onChange={handleInputChange}
      />
      <label htmlFor="testimonial">Testimonial</label>
      <textarea
        id="testimonial"
        name="testimonial"
        value={formValues.testimonial}
        placeholder="Write your testi"
        required
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
      <p>Current value of username: {formValues.username}</p>
      <p>Current value of testimonial: {formValues.testimonial}</p>
    </form>
  );
}
