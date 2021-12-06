import React from "react";
import { render } from "@testing-library/react";
import Post from "./Post";

const defaultPost = {
  id: 0,
  name: "Jay",
  city: "Los Angeles",
  item: "Shirt",
  description: "description here",
  pickup: true,
  postType: 0,
  availability: 0,
};
const secondPost = {
  id: 0,
  name: "Jay",
  city: "Los Angeles",
  item: "Shirt",
  description: "description here",
  pickup: true,
  postType: 1,
  availability: 1,
};

test("rendered name", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("name").innerHTML).toBe(defaultPost.name);
});

test("rendered city", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("city").innerHTML).toBe(defaultPost.city);
});
test("rendered item", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("item").innerHTML).toBe(defaultPost.item);
});
test("rendered description", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("description").innerHTML).toBe(defaultPost.description);
});
test("rendered pickup", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("pickup").innerHTML).toBe(" - Pickup only");
});
test("rendered post type", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("category").innerHTML).toContain("Gift");
});
test("rendered availability", () => {
  const { getByTestId } = render(<Post {...defaultPost} />);
  expect(getByTestId("availability").innerHTML).toContain("Available");
});
test("rendered ask pickup", () => {
  const { getByTestId } = render(<Post {...secondPost} />);
  expect(getByTestId("pickup").innerHTML).toBe(" - Can pickup");
});
test("rendered ask post type", () => {
  const { getByTestId } = render(<Post {...secondPost} />);
  expect(getByTestId("category").innerHTML).toContain("Ask");
});
test("rendered ask post availability", () => {
  const { getByTestId } = render(<Post {...secondPost} />);
  expect(getByTestId("availability").innerHTML).toContain("Pending");
});
