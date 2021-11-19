import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders a link with the text Sebra Events", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Sebra Events" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the text See your saved Bucket List!", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", {
    name: "See your saved Bucket List!",
  });
  expect(linkElement).toBeInTheDocument();
});

test("renders zebra image to the page", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const imgElement = screen.getByAltText("fancy zebra");
  expect(imgElement).toBeInTheDocument();
});

test("renders speech bubble image to the page", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const imgElement = screen.getByAltText("speech bubble");
  expect(imgElement).toBeInTheDocument();
});
