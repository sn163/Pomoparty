"use client";

import { submitWeb3Form } from "@/_actions/handleWeb3";
import { useMemo, useRef } from "react";
import { ThemedButton } from "./ui/ThemedButton";

export default function ContactForm() {
  const categories = useMemo(
    () =>
      [
        { value: "bug", text: "I've noticed a Bug" },
        { value: "account", text: "Issue with my Account" },
        { value: "feedback", text: "I have some Feedback" },
        { value: "other", text: "Other" },
      ].map(({ value, text }, key) => (
        <option value={value} key={`contactCategory${key}`}>
          {text}
        </option>
      )),
    [],
  );

  const ref = useRef<HTMLFormElement>(null);

  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={ref}
        className="card-body"
        action={async (formData) => {
          const data = await submitWeb3Form(formData);
          if (data.success) ref.current?.reset();
        }}
      >
        <div className="form-control">
          <label htmlFor="category" className="label">
            <span className="label-text">I&apos;d like to chat about...</span>
          </label>
          <select
            id="category"
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
          <label htmlFor="text" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="text"
            type="text"
            name="name"
            placeholder="John Doe"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="my@email.com"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Please enter your message here."
            className="textarea textarea-bordered resize-none"
            required
          />
        </div>

        <div className="form-control mt-6">
          <ThemedButton
            variant="solid"
            size="md"
            type="submit"
            className="btn btn-primary"
          >
            Submit Form
          </ThemedButton>
        </div>
      </form>
    </>
  );
}
