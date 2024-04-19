"use server";

export async function submitWeb3Form(formData: FormData) {
  try {
    if (process.env.WEB3_KEY) {
      formData.append("access_key", process.env.WEB3_KEY);
    } else {
      throw new Error("process.env.WEB3_KEY required, but missing");
    }

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

    return result;
  } catch (e) {
    throw new Error("Something went from in submitWeb3Form");
  }
}
