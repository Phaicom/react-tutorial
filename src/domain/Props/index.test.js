import { render, screen } from "@testing-library/react";
import React from "react";
import Props from ".";

test("renders learn react link", () => {
  render(<Props />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
