import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("renders button with text search", () => {
  render(<SearchForm />);
  const submitButton = screen.getByRole("button", { name: "Search" });
  expect(submitButton).toBeInTheDocument();
});
