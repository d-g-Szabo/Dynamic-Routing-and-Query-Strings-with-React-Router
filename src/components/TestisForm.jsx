import { useState } from "react";
export default function TestiesForm() {
  // declare useState to track the input values
  // initialize the state with an empty string bc the type of the input is text
  //; we need to link the value of the input to the state with the "value=" attribute
  const [username, setUsername] = useState("");
  const [testimonial, setTestimonial] = useState("");

  //this function controls the onSubmiut event of the form
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());
    console.log(formJSON);
  }
  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }
  function handleTestimonialChange(event) {
    setTestimonial(event.target.value);
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
        value={username}
        placeholder="Write your name"
        required
        // we added the onChange event, so when the user types in the input, the handleUsernameChange function is called and updates the vale of the state
        onChange={handleUsernameChange}
      />
      <label htmlFor="testimonial">Testimonial</label>
      <textarea
        id="testimonial"
        name="testimonial"
        value={testimonial}
        placeholder="Write your testig"
        required
        onChange={handleTestimonialChange}
      />
      <button type="submit">Submit</button>
      <p>Current value of username: {username}</p>
      <p>Current value of testimonial: {testimonial}</p>
    </form>
  );
}
