"use client";

// import { useState } from "react";

// type selectCategory = "none" | "account" | "bug" | "feedback" | "other";

type ContactData = {
  name: string;
  email: string;
  category: selectCategory;
  details: string;
};

const ContactUsSelectCategories = {};

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [category, setCategory] = useState("none");
  // const [details, setDetails] = useState("");


  const handleSubmit = (e): void => {

    //  const formToBeSubmitted = {
    //     name: e.target.name.name,
    //     value: e.target.name.value
    //  }

        // console.log(e.target.email.name);
    // console.log(e.target.email.value);
    console.log(e.target);
    const {name} = e.target;
    console.log(name)
    e.preventDefault();
    const formToBeSubmitted = {
      {name}
    };

  // const handleInputs =
  //   (inputField: string) => (event: ChangeEvent<HTMLInputElement>) => {
  //     const { value } = event.target;
  //     setTimeUnitsInput((prevState) => ({
  //       ...prevState,
  //       [inputField]: +value,
  //     }));
  //   };



    // Object.assign(
    //   {},
    //   ...e.target.map(({ name, value }) => ({ [name]: value })),
    // );

    console.log("formToBeSubmitted: ", formToBeSubmitted);

    console.log(formToBeSubmitted);
  };

  return (
    <main className="flex flex-col items-center space-y-4 p-20">
      <div className="my-20 flex flex-col items-center" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <form className="flex flex-col items-center space-y-3">
          {/* name */}
          <label className="input input-bordered flex items-center gap-3">
            Name
            <input
              name="name"
              // onChange={handleChange}
              type="text"
              className="grow"
              placeholder="Pomo Doro"
            />
          </label>
          {/* email */}
          <label className="input input-bordered flex items-center gap-3">
            Email
            <input
              name="email"
              // onChange={handleChange}
              type="email"
              className="grow"
              placeholder="my@email.com"
            />
          </label>
          {/* select category */}
          <select
            name="category"
            // onChange={handleChange}
            className="form-control select select-bordered flex items-center"
          >
            <option disabled selected>
              Pick a category
            </option>
            {categories}
          </select>
          {/* explain yoself */}
          <textarea
            name="details"
            // onChange={handleChange}
            placeholder="Please provide more details"
            className="textarea textarea-bordered flex items-center gap-2 bg-base-100"
          ></textarea>
          {/* button */}
          <button
            type="submit"
            value="Submit"
            // onClick={(e) => {
            //   console.log("in onClick: ", e.target);
            //   // e.preventDefault();
            // }}
            className="btn-main rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
