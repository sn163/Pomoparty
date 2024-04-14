import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../_components/Navbar";
import Timer from "../_components/Timer";
import { TimerContextProvider } from "../_components/context/TimerContext";

describe("App Test", () => {
  it("check the Duo Session", () => {
    render(<NavBar />);
    const buttonText = screen.getByRole("button", { name: "Duo Session" });
    expect(buttonText).toBeInTheDocument();
  });
  it("check the Features", () => {
    render(<NavBar />);
    const buttonText = screen.getByRole("button", { name: "Features" });
    expect(buttonText).toBeInTheDocument();
  });
  it("check Sign In", () => {
    render(<NavBar />);
    const buttonText = screen.getByRole("button", { name: "Sign In" });
    expect(buttonText).toBeInTheDocument();
  });
  it("check the Sign Up", () => {
    render(<NavBar />);
    const buttonText = screen.getByRole("button", { name: "Sign Up" });
    expect(buttonText).toBeInTheDocument();
  });
  it("check the Contact", () => {
    render(<NavBar />);
    const buttonText = screen.getByRole("button", { name: "Contact" });
    expect(buttonText).toBeInTheDocument();
  });
  it("check Start", () => {
    render(
      <TimerContextProvider>
        <Timer />
      </TimerContextProvider>,
    );
    const buttonText = screen.getByText("Start");
    expect(buttonText).toBeInTheDocument();
  });
  it("check Reset", () => {
    render(
      <TimerContextProvider>
        <Timer />
      </TimerContextProvider>,
    );
    const buttonText = screen.getByText("Reset");
    expect(buttonText).toBeInTheDocument();
  });
});
