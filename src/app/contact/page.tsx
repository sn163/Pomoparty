"use client";

// import { useState } from "react";

type selectCategory = "none" | "account" | "bug" | "feedback" | "other";

type ContactData = {
  name: string;
  email: string;
  category: selectCategory;
  details: string;
  somehingelse: string;
};
const ContactUsSelectCategories = {

}


export default function Contact() {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [category, setCategory] = useState("none");
//   // const [details, setDetails] = useState("");

//   const inputComponent = (type:string,name:string,options={
//     label: false,
//     labelInnerHtml: ''
//   },d) => {



//     return (
//       <>
//       {options.label ? <label></label>}
//         <input type={type} name={name} className=''>
//       </>
//     )
//   }

  const handleSubmit = (e):void => {
    console.log("handleSubmit()");
    e.preventDefault();
    console.log(e.target)
    // const val = e.target ;
    // const formToBeSubmitted: ContactData = {
    //  name : e.target[0] 
    // }

    // for (let el of e.target) {
    //   console.log("looping through e", el.value);
    //   formToBeSubmitted[el.name] = el.value;
    // }

    // console.log("submit: ", e.target);
  };

  // const handleChange = (e) => {
  //   const val = e.target.value;

  //   // console.log(e.target.type)
  //   console.log(e.target.name + ": " + val);
  //   // console.log("val: ", val)
  //   console.log({ name, email, category, details });
  // }; space-y-10'
  
  return (
    <div 
    className='flex flex-col items-center my-20'
    // hidden={true} 
    onSubmit={handleSubmit } >
      <h1>Contact Us</h1>

      <form className='flex flex-col items-center space-y-5'>
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
          <option value="none" disabled selected>
            Pick a category
          </option>
          <option value="account">Something Is Wrong With My Account</option>
          <option value="bug">Report a Bug</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
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
  );
}
