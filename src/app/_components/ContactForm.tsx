"use client";

import { submitWeb3Form } from "../actions/handleWeb3"
// import { useState } from "react";

type selectCategory = "none" | "account" | "bug" | "feedback" | "other";

type ContactFormData = {
  name: string;
  email: string;
  category: selectCategory;
  message: string;
};

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [category, setCategory] = useState("none");
  // const [message, setMessage] = useState("");

  const categories = [
    { value: "bug", text: "I've noticed a Bug" },
    { value: "account", text: "Issue with my Account" },
    { value: "feedback", text: "I have some Feedback" },
    { value: "other", text: "Other" },
  ].map(({ value, text }, key) => (
    <option value={value} key={`contactCategory${key}`}>
      {text}
    </option>
  ));

  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content xl:flex-col">
          
          <div className="min-w-xl card w-full max-w-2xl shrink-0 bg-base-100 shadow-2xl xl:card-side">
            <form className="card-body" onSubmit={submitWeb3Form}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    I&apos;d like to chat about...
                  </span>
                </label>
                <select
                  name="category"
                  className="select select-bordered"
                  required
                >
                  <option disabled selected>
                    - Please Select -
                  </option>
                  {categories}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="my@email.com"
                  className="input input-bordered"
                  // onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>

                <textarea
                  name="message"
                  placeholder="Please enter your message here."
                  className="textarea textarea-bordered resize-none"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
