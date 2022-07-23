import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders main page components", () => {
  render(<App />);
  const header = screen.getByRole("heading", { name: /great news/i });
  expect(header).toBeInTheDocument();
});

test("news items exist", () => {
  render(<App />);
  const newsSummery = screen.getByTestId("newsSummary");
  expect(newsSummery).toBeVisible;
  expect(newsSummery).toContainHTML("div");
});

test("search input is focussed when page loads", () => {
  render(<App />);
  const searchInput = screen.getByRole("textbox");
  expect(searchInput).toHaveFocus;
});

test("button displays when page loads", () => {
  render(<App />);
  const resetSearch = screen.getByRole('button', {  name: /reset search/i});
  expect(resetSearch).toHaveClass('btn-reset')
})
