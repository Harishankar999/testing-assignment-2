import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import App from "../App";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
describe("Button test", () => {
  it("should have button in dom", () => {
    render(<Button>Click me</Button>);
    let button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("should have button in dom", () => {
    render(<App></App>);
    let button = screen.getByTestId("cButton");
    expect(button).toBeInTheDocument();
  });

  it("should render empty Button", () => {
    render(<Button></Button>);
    let button = screen.getByTestId("cButton");
    expect(button).toBeInTheDocument();
  });

  it("should change theme", () => {
    render(<App></App>);
    let h3 = screen.getByText("Current theme is light");
    expect(h3).toHaveTextContent("light");

    let themeBtn = screen.getByText("Change Theme");
    fireEvent.click(themeBtn);
    //Or userEvent.click(themeBtn); fireEvent and userEvent are equal
    expect(h3).toHaveTextContent("dark");
  });

  it("Should call the given the function", () => {
    const mockfn = jest.fn();
    render(<Button onClick={mockfn}>Click me</Button>);
    const btn = screen.getByTestId("cButton");
    fireEvent.click(btn);
    expect(mockfn).toBeCalled();
  });

  // Snapshot -> Screenshot Represented in a particular format

  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} variant={"ghost"}>
          Add Counter
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
