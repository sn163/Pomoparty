"use client";

import { useState } from "react";

type selectCategory = "none" | "account" | "bug" | "feedback" | "other";

type ContactFormData = {
  name: string;
  email: string;
  category: selectCategory;
  details: string;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("none");
  const [details, setDetails] = useState("");

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

  const handleSubmit = (event): void => {
    event.preventDefault();
    const { name, email, category, details } = event.target;

    const formInputData = {
      name: name.value,
      email: email.value,
      category: category.value,
      details: details.value,
    };

    // const formInputData = new FormData(event.currentTarget);

    // console.log(formInputData.get("name"));
    // console.log(formInputData.get("email"));
    // console.log(formInputData.get("category"));
    // console.log(formInputData.get("details"));
    // console.log(formInputData.values());
  };

  return (
    <main className="flex flex-col items-center space-y-4 p-20">
      <div className="card w-full max-w-sm shrink-0 bg-primary shadow-2xl">
        <div className="card-body flex flex-col items-center">
          <h1 className="my-4 flex items-center text-5xl font-bold text-accent">
            Contact Us
          </h1>
          <form
            className="flex flex-col items-center space-y-3"
            onSubmit={handleSubmit}
          >
            <label className="input input-bordered flex items-center gap-3">
              Name
              <input
                name="name"
                type="text"
                className="grow"
                placeholder="Pomo Doro"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-3">
              Email
              <input
                name="email"
                type="email"
                className="grow"
                placeholder="email"
                required
              />
            </label>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <select
              name="category"
              className="select select-bordered flex items-center"
              required
            >
              <option disabled selected>
                Select One
              </option>
              {categories}
            </select>
            <textarea
              name="details"
              placeholder="Please provide more details"
              className="textarea textarea-bordered flex items-center gap-2 bg-base-100"
            ></textarea>
            <button
              type="submit"
              value="Submit"
              className="btn btn-accent rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
