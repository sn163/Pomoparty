"use server";

export async function submitWeb3Form(event): void {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "4042dbcb-3267-483f-9448-f185918686f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }

    // const { name, email, category, message } = event.target;

    // const formInputData = {
    //   name: name.value,
    //   email: email.value,
    //   category: category.value,
    //   message: message.value,
    // };

    // const formInputData = new FormData(event.currentTarget);

    // console.log(formInputData.get("name"));
    // console.log(formInputData.get("email"));
    // console.log(formInputData.get("category"));
    // console.log(formInputData.get("message"));
    // console.log(formInputData.values());
  }