"use client";

import { submitWeb3Form } from "@/app/_actions/handleWeb3";
import React, {
  ChangeEvent,
  ReactHTMLElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Category = "bug" | "account" | "feedback" | "other";
type ContactFormEntries = "name" | "email" | "category" | "message";

export default function ContactForm() {
  /**
   * form data: {
   *    name: min 2 chars?
   *    email: regex for *@**.**
   *    category: selected must not be first option
   *    message: > 20 len
   * }
   *
   * - Submit Button grayed out and unclickable until all reqs met.  if clicked, will run check on all fields
   * - form instant feedback
   *      - email: checked after > 1 char is entered and focus is deselected
   *      - category: when Message field is selected
   *      * no check when error already displayed and formfield hasnt received any new input
   *          - or:  only re-check for error when input state changes && error is currently shown
   *
   */

  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    category: false,
    message: false,
  });

  const categoryOptions = useMemo(
    () =>
      [
        { value: "bug", text: "I've noticed a Bug" },
        { value: "account", text: "Issue with my Account" },
        { value: "feedback", text: "I have some Feedback" },
        { value: "other", text: "Other" },
      ].map(({ value, text }, key) => (
        <option
          value={value}
          key={`contactCategory${key + 1}`}
          className="font-normal"
        >
          {text}
        </option>
      )),
    [],
  );

  const validateForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;

    type ValidityChecker = (input: string) => boolean;
    interface ValidyCheckers {
      [ContactFormEntries: string]: ValidityChecker;
    }

    const formValidationRules: ValidyCheckers = {
      name: (input) => input.length >= 2,
      email: (input) => {
        const regex =
          /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return regex.test(input);
      },
      category: (input) => input !== "none-selected",
      message: (input) => input.length > 12 && input.length < 200,
    };

    const isValid = formValidationRules[name](value);

    console.log(isValid);

    setFormValidity({
      ...formValidity,
      [name]: isValid,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={formRef}
        className="card-body"
        action={async (formData) => {
          const data = await submitWeb3Form(formData);
          if (data.success) formRef.current?.reset();
        }}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">I&apos;d like to chat about...</span>
          </label>
          <select
            value={category}
            name="category"
            className="select select-bordered"
            onChange={validateForm}
            required
          >
            <option
              value="none-selected"
              key="contactCategory0-disabled"
              disabled
            >
              - Please Select -
            </option>
            {categoryOptions}
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
            onChange={validateForm}
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
            onChange={validateForm}
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
            onChange={validateForm}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit Form
          </button>
        </div>
      </form>
    </>
  );
}
