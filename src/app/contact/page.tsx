import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("none");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    const val = e.target.value
    e.preventDefault();
  }

  const handleChange = (e) => {
    const val = e.target.value
  }
  return (
    <div>
      <h1>Contact Us</h1>

<form onSubmit={handleSubmit}>
      {/* name */}
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Pomo Doro" />
      </label>
      {/* email */}
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="my@email.com" />
      </label>
      {/* select category */}
        <select value={category} onChange={handleChange} className="select form-control select-bordered grow flex items-center gap-2">
          <option value="none" disabled selected>
            Pick a category
          </option>
          <option value="account">Something Is Wrong With My Account</option>
          <option value="bug">Report a Bug</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      {/* explain yoself */}
      <textarea value={details}
        placeholder="Please provide more details"
        className="textarea textarea-bordered bg-base-100 flex items-center gap-2"
      ></textarea>
      {/* button */}
      <button className="btn-main rounded-full">
        {/* stick this back, up there: disabled={!activeTimer}
         onClick={() => pause()}
      */}
        Submit
      </button>
</form>

    </div>
  );
}
