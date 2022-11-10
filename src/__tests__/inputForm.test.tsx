import { render, screen } from "@testing-library/react";
import { InputForm } from "../components/inputForm";

test("Input form test", () => {
    //arrange
  render(<InputForm />);
  
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
