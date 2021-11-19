import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Result from "./Result";

test("the root element has a class of result", () => {
  const { container } = render(
    <BrowserRouter>
      <Result
        event={{
          name: "Test",
          id: "abc123",
          url: "www.google.com",
          images: [{ url: "www.image.com" }],
        }}
      />
    </BrowserRouter>
  );

  const componentElement = container.firstChild;
  expect(componentElement).toHaveClass("Result");
});
